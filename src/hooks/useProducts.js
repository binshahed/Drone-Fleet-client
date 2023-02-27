import { useEffect, useState } from 'react'
import { apiUrl } from '../config/config'

// load data from db
const useProducts = () => {
  const [products, setProducts] = useState([])
  const [waiting, setWaiting] = useState(true)

  useEffect(() => {
    setWaiting(true)
    fetch(`${apiUrl}/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setWaiting(false)
      })
  }, [])

  return [products, setProducts, waiting]
}
export default useProducts
