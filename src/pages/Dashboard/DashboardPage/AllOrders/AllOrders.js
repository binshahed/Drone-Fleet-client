import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const AllOrders = () => {
  const [orders, setOrders] = useState([])
  const [approved, seApproved] = useState({})
  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then(response => response.json())
      .then(data => setOrders(data))
  }, [approved])
  console.log(orders)

  const handleUpdateStatus = id => {
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
              {order?.status === 'pending' && (
                <td>
                  <button
                    onClick={() => handleUpdateStatus(order._id)}
                    className='btn btn-success'
                  >
                    Shipped
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

export default AllOrders
