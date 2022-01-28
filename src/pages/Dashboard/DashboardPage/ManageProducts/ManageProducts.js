import { Spinner, Table } from 'react-bootstrap'
import useProducts from '../../../../hooks/useProducts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ManageProducts = () => {
  const [products, setProducts, waiting] = useProducts([])


  //   setAllProduct(products)

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure? Delete This Product')
    const url = `https://intense-cliffs-56179.herokuapp.com/products/${id}`
    if (proceed) {
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('deleted successfully')
            const remainingOrders = products.filter(order => order._id !== id)
            setProducts(remainingOrders)
          }
        })
    }
  }

  if (waiting) {
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
    <div className='container'>
      <h1 className='text-center my-5'>My Orders</h1>
      <Table striped responsive='sm'>
        <thead className="text-center">
          <tr>
            <th>Sl</th>
            <th>Product image</th>
            <th>Product Name</th>
            <th>Product Code</th>
            <th>Product Price</th>

            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>
                {' '}
                <img
                  src={product?.product_img}
                  alt=''
                  style={{ width: '100px', height: '50px' }}
                />{' '}
              </td>
              <td>{product?.product_name}</td>
              <td>{product?._id}</td>
              <td>{product?.product_price}$</td>
              <td>
                <button
                  onClick={() => handleDelete(product._id)}
                  className='btn btn-danger text-center'
                  title='Delete Product'
                >
                  <FontAwesomeIcon icon={faTrash} style={{ color: '#fff' }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ManageProducts
