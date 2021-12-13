import { useEffect, useState } from 'react'

// load data from db
const useProducts = () => {
  const [products, setProducts] = useState([])
  const [waiting, setWaiting] = useState(true)

  useEffect(() => {
    setWaiting(true)
    fetch('./droneData.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setWaiting(false)
      })
  }, [])

  return [products, waiting]
}
export default useProducts