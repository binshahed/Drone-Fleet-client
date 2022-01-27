import React, { useEffect, useState } from 'react'
import { Spinner, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

const AllOrders = () => {
  const [orders, setOrders] = useState([])
  const [approved, seApproved] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:5000/orders')
      .then(response => response.json())
      .then(data => {
        setOrders(data)
        setIsLoading(false)
      })
  }, [approved])

  const handleUpdateStatus = id => {
    const proceed = window.confirm('Are Your sure? Shipped this Product')
    if (proceed) {
      const shippedData = orders?.find(order => order._id === id)
      shippedData.status = 'shipped'
      const url = `http://localhost:5000/orders/${id}`
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(shippedData)
      })
        .then(res => res.json())
        .then(data => {
          alert('order is Shipped')
          seApproved(data)
        })
    }
  }

  if (isLoading) {
    return (
      <div className='App my-5'>
        <Spinner
          style={{ marginTop: '200px', height: '100px', width: '100px' }}
          animation='border'
          variant='warning'
        />
      </div>
    )
  }

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure? Delete This Product')
    const url = `http://localhost:5000/orders/${id}`
    if (proceed) {
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('order deleted successfully')
            const remainingOrders = orders.filter(order => order._id !== id)
            setOrders(remainingOrders)
          }
        })
    }
  }

  return (
    <div className='container'>
      <h1 className='text-center py-5'>Manage All Order</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sl</th>
            <th>Name</th>
            <th>Email</th>
            <th>Product Name</th>
            <th>Address</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Delete Order</th>
            <th>Delivery</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order._id}>
              <td>{index + 1}</td>
              <td>{order?.name}</td>
              <td>{order?.email}</td>
              <td>{order?.product?.product_name}</td>
              <td>{order?.address}</td>
              <td>{order?.date}</td>
              <td>{order?.status}</td>
              <td>
                <button
                  onClick={() => handleDelete(order._id)}
                  className='btn btn-danger'
                  title='Delete Order'
                >
                  <FontAwesomeIcon icon={faTrash} style={{ color: '#fff' }} />
                </button>
              </td>
              {order?.status === 'pending' && (
                <>
                  <td>
                    <button
                      onClick={() => handleUpdateStatus(order._id)}
                      className='btn btn-success'
                      title='Confirm Order'
                    >
                      <FontAwesomeIcon
                        icon={faCheckSquare}
                        style={{ color: '#fff' }}
                      />
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default AllOrders
