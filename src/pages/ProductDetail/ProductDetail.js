import axios from 'axios'
import React from 'react'
import { Spinner } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import useProducts from '../../hooks/useProducts'
import useAuth from '../context/useAuth'
import Footer from '../Footer/Footer'
import Navigation from '../Shared/Navigation/Navigation'

const ProductDetail = () => {
  const [products, setProducts, waiting] = useProducts()

  const { productId } = useParams()
  const productFound =
    products.length > 0 &&
    products.find(myProduct => myProduct._id.toString() === productId)

  const { user } = useAuth()
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = data => {
    data.product = productFound
    const date = new Date()
    data.status = 'pending'
    data.date = date.toLocaleDateString()

    axios.post('https://intense-cliffs-56179.herokuapp.com/orders', data).then(res => {
      if (res.data.insertedId) {
        alert('added successfully')
        reset()
      }
    })


  }

  if (waiting) {
    return (
      <div className='App my-5'>
        <Spinner style={{marginTop:'200px', height:'100px', width:'100px'}} animation='border' variant='warning' />
      </div>
    )
  }

  return (
    <div>
      <Navigation />
      <div className='container pt-5 mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <>
              <h1>{productFound?.product_name}</h1>
              <img
                style={{ width: '100%' }}
                src={productFound?.product_img}
                alt=''
              />
              <h4 className='py-3'>Price: {productFound?.product_price}$</h4>
              <p>{productFound?.product_detail}</p>
            </>
          </div>
          <div className='col-md-6'>
            <div className='py-5'>
              <div className='card shadow'>
                <div className='card-title  border-bottom'>
                  <h2 className='p-3'>Order Now</h2>
                </div>
                <div className='card-body'>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                      <label className='form-label'>Name</label>
                      <input
                        type='text'
                        className='form-control'
                        defaultValue={user?.displayName}
                        {...register('name', { required: true })}
                      />
                    </div>
                    <div className='mb-4'>
                      <label className='form-label'>Email</label>
                      <input
                        type='email'
                        className='form-control'
                        defaultValue={user?.email}
                        {...register('email', { required: true })}
                      />
                    </div>
                    <div className='mb-4'>
                      <label className='form-label'>Phone</label>
                      <input
                        type='tel'
                        className='form-control'
                        {...register('phone', { required: true })}
                      />
                    </div>
                    <div className='mb-4'>
                      <label className='form-label'>Address</label>
                      <textarea
                        type='text'
                        className='form-control'
                        {...register('address', { required: true })}
                      />
                    </div>

                    <div className='d-grid'>
                      <button type='submit' className='btn text-light bg-dark'>
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductDetail
