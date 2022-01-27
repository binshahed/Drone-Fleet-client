import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = data => {
    console.log(data)
    axios.put('http://localhost:5000/users/admin', data).then(res => {
      if (res.data.modifiedCount) {
        alert('admin Add successfully')
        reset()
      }
    })
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
    </div>
  )
}

export default MakeAdmin
