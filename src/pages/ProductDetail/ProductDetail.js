import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import useProducts from '../../hooks/useProducts'

const ProductDetail = () => {
  const [products] = useProducts()
  console.log(products);
  const { productId } = useParams()
  const productFound = products.length>0 && products.find(myProduct => (myProduct.id).toString() === productId)
  console.log(productFound);
  return <div>
      <h1>{productFound}</h1>
  </div>
}

export default ProductDetail
