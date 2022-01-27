import { useEffect, useState } from 'react'


// load data from db
const useProducts = () => {
  const [products, setProducts] = useState([])
  const [waiting, setWaiting] = useState(true)

  useEffect(() => {
    setWaiting(true)
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setWaiting(false)
      })
  }, [])

  return [products, setProducts,  waiting]
}
export default useProducts