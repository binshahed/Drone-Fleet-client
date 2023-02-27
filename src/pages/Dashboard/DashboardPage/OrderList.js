import React, { useEffect, useState } from 'react'
import { Spinner, Table } from 'react-bootstrap'
import { apiUrl } from '../../../config/config'
import useAuth from '../../context/useAuth'

const OrderList = () => {
  const { user } = useAuth()
  const [myOrders, setMyOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch(`${apiUrl}/orders?email=${user.email}`)
      .then(response => response.json())
      .then(data => {
        setMyOrders(data)
        setIsLoading(false)
      })
  }, [user.email])

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure? Delete This Product')
    const url = `${apiUrl}/orders/${id}`
    if (proceed) {
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('order deleted successfully')
            const remainingOrders = myOrders.filter(order => order._id !== id)
            setMyOrders(remainingOrders)
          }
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

  return (
    <div className='container'>
      <h1 className='text-center'>My Order</h1>
      <Table responsive='sm'>
        <thead>
          <tr>
            <th>Sl</th>
            <th>Name</th>
            <th>Email</th>
            <th>Product Name</th>
            <th>Address</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Delivery</th>
          </tr>
        </thead>
        <tbody>
          {myOrders.map((order, index) => (
            <tr key={order._id}>
              <td>{index + 1}</td>
              <td>{order?.name}</td>
              <td>{order?.email}</td>
              <td>{order?.product?.product_name}</td>
              <td>{order?.address}</td>
              <td>{order?.date}</td>
              <td>{order?.status}</td>
              {order?.status === 'pending' && (
                <td>
                  <button
                    onClick={() => handleDelete(order._id)}
                    className='btn btn-danger'
                  >
                    Cancel Order
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default OrderList
