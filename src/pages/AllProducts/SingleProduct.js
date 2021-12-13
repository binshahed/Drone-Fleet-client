import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const SingleProduct = (props) => {
    const {product_name,product_detail,product_img,product_price}=props.product
    return (
        <Col>
      <Card>
        <Card.Img variant="top" src={product_img} />
        <Card.Body>
          <Card.Title>{product_name}</Card.Title>
          <Card.Text>
           {product_detail}
          </Card.Text>
          <div className='text-center' >
          <Card.Text className='fw-bold '>
           Price: {product_price}
          </Card.Text>
          <Button  className="fw-bold ">Buy Now</Button>

          </div>

        </Card.Body>
      </Card>
    </Col>
    );
};

export default SingleProduct;