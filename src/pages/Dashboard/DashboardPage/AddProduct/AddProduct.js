import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { apiUrl } from '../../../../config/config'

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = data => {
    axios.post(`${apiUrl}/products`, data).then(res => {
      if (res.data.insertedId) {
        alert('added successfully')
        reset()
      }
    })
  }
  return (
    <div className='container my-5'>
      <h1 className='text-center'>Add a Product</h1>

      <div className='row justify-content-center mt-5'>
        <div className='card shadow'>
          <div className='card-body'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-4'>
                <label className='form-label'>Product Name</label>
                <input
                  {...register('product_name', { required: true })}
                  type='text'
                  className='form-control'
                  id='username'
                />
              </div>
              <div className='mb-4'>
                <label className='form-label'>Price</label>
                <input
                  {...register('product_price', { required: true })}
                  type='number'
                  className='form-control'
                  id='username'
                />
              </div>
              <div className='mb-4'>
                <label className='form-label'>Product Detail</label>
                <textarea
                  type='text'
                  className='form-control'
                  {...register('product_detail', { required: true })}
                />
              </div>

              <div className='mb-4'>
                <label className='form-label'>Image url</label>
                <input
                  {...register('product_img', { required: true })}
                  type='text'
                  className='form-control'
                  id='username'
                />
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
  )
}

export default AddProduct
