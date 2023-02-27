import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner, Table } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { apiUrl } from '../../../config/config'

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState([])
  const onSubmit = data => {
    axios.put(`${apiUrl}/users/admin`, data).then(res => {
      if (res.data.modifiedCount) {
        alert('admin Add successfully')
        reset()
      }
    })
  }

  useEffect(() => {
    setIsLoading(true)
    fetch(`${apiUrl}/users`)
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setIsLoading(false)
      })
  }, [])

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
    <div className='container my-5'>
      <h1 className='text-center'>Make an admin</h1>

      <div className='row justify-content-center mt-5'>
        <div className='col-lg-4 col-md-6 col-sm-6'>
          <div className='card shadow'>
            <div className='card-body'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                  <label className='form-label'>Email</label>
                  <input
                    {...register('email')}
                    type='email'
                    className='form-control'
                    id='username'
                  />
                </div>
                <div className='mb-4'>
                  <label className='form-label'>Set Role</label>

                  <select className='form-control' {...register('role')}>
                    <option value='admin'>admin</option>
                  </select>
                </div>

                <div className='d-grid'>
                  <button type='submit' className='btn text-light bg-dark'>
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className='text-center pt-5 mt-5'>All Users</h2>
        <Table striped responsive='sm'>
          <thead className='text-center'>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user?.displayName}</td>
                <td>{user?.email}</td>
                <td>{user?.role || 'user'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default MakeAdmin
