import React, { useState } from 'react'
import { Row, Spinner } from 'react-bootstrap'
import useProducts from '../../hooks/useProducts'
import Footer from '../Footer/Footer'
import Navigation from '../Shared/Navigation/Navigation'
import SingleProduct from './SingleProduct'

const AllProducts = props => {
  const [products, waiting] = useProducts([])
  console.log(products)

  const homeProduct = products.slice(0, 6)

  if (waiting) {
    return (
      <div className='App my-5'>
        <Spinner style={{marginTop:'200px', height:'100px', width:'100px'}} animation='border' variant='warning' />
      </div>
    )
  }

  return (
    <div className='allProducts'>
        {!props?.home && <Navigation/>}
      <div className='container'>
        <h1 className='text-center py-5 my-5'>Drone Products</h1>
        <Row xs={1} md={3} className='g-4'>
          {props?.home
            ? homeProduct.map(product => (
                <SingleProduct
                  product={product}
                  key={product.id}
                ></SingleProduct>
              ))
            : products.map(product => (
                <SingleProduct
                  product={product}
                  key={product.id}
                ></SingleProduct>
              ))}
        </Row>
      </div>
      {!props?.home && <Footer/>}
    </div>
  )
}

export default AllProducts
