import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleProduct = props => {
  const {
 
    _id,
    product_name,
    product_detail,
    product_img,
    product_price
  } = props.product

  return (
    <Col>
      <Card>
        <Card.Img variant='top' src={product_img} />
        <Card.Body>
          <Card.Title>{product_name}</Card.Title>
          <Card.Text>{product_detail}</Card.Text>
          <div className='text-center'>
            <Card.Text className='fw-bold '>Price: {product_price}$</Card.Text>
            <Link to={`/drones/${_id}`}>
              <Button className='fw-bold '>Buy Now</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleProduct
