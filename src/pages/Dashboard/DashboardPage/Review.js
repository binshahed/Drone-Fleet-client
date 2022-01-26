import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Rating } from 'react-simple-star-rating'
import useAuth from '../../context/useAuth'

const Review = () => {
  const { user } = useAuth()
  const { register, handleSubmit, reset } = useForm()
  const [rating, setRating] = useState(20) // initial rating value

  // Catch Rating value
  const handleRating = rate => {
    setRating(rate)
    
  }

  const onSubmit = data => {
    const date = new Date()
    data.date = date.toLocaleDateString()
    data.rating = rating


    axios.post('http://localhost:5000/review', data).then(res => {
      if (res.data.insertedId) {
        alert('Review Add Successfully')
        reset()
      }
    })

    console.log(data)
  }
  return (
    <div className='container'>
      <h1 className='text-center mt-5 text-warning'>Place Your Review About Our Drone Store</h1>
      <div className='py-5'>
        <div className='card shadow'>
          <div className='card-title  border-bottom'>
            <h2 className='p-3'>Rate Now</h2>
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
                <label className='form-label'>Rating</label>
                <br />
                <Rating
                  onClick={handleRating}
                  ratingValue={rating}
                  size={50}
                  level
                  transition
                  fillColor='orange'
                  emptyColor='gray'
                  className='foo'
                />
              </div>
              <div className='mb-4'>
                <label className='form-label'>Your Review</label>
                <textarea
                  type='text'
                  className='form-control'
                  {...register('message', { required: true })}
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
  )
}

export default Review
