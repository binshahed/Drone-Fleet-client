import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'

const Review = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/review`).then(response => {
      setReviews(response.data)
    })
  }, [])
  console.log(reviews)

  return (
    <div className='container my-5 '>
      <h1 className='text-center py-5 pseudo_border'>Customer Review</h1>
      <div className='row gy-4'>
        {reviews.map(review => (
          <div key={review._id} className='col-md-3 col-xs-6 col-sm-6'>
            <Card>
              <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Rating
              
                  ratingValue={review.rating}
                  size={20}
                  level
                  transition
                  fillColor='orange'
                  emptyColor='gray'
                  className='foo'
                />
                <Card.Text>{review.message}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Review
