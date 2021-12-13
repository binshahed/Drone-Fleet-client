import React from 'react'
import './NotFound.css'
import notFoundImage from '../../images/dribbble_1.gif'
import Navigation from '../Shared/Navigation/Navigation'
import Footer from '../Footer/Footer'

const NotFound = () => {
  return (
    <div>
      <Navigation />
      <div className='text-center'>
        <div className='error p-3'>
          <img style={{ width: '60%' }} src={notFoundImage} alt='' />
        </div>

        <h3 style={{marginTop:'-30px' }} className='info text-warning'>404 Page not found</h3>
        <img src='' className='static' alt='' />
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
