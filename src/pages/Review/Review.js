import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card, Spinner } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import Footer from '../Footer/Footer'
import Navigation from '../Shared/Navigation/Navigation'

const Review = props => {
  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get(`http://localhost:5000/review`).then(response => {
      setReviews(response.data)
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
    <>
      {!props.home && <Navigation />}
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
      {!props.home && <Footer />}
    </>
  )
}

export default Review
