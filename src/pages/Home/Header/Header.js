import React from 'react'
import './Header.css'
import headerImg from '../../../images/headerDrone.gif'
import { Button } from 'react-bootstrap'
import TextLoop from 'react-text-loop/lib/components/TextLoop'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='container '>
        <div
          className='d-flex align-items-center justify-content-center'
          style={{ marginTop: '150px' }}
        >
          <div className='row'>
            <div className='col-md-6 col-sm-12 text-light py-5 ' >
              <h5>THE NEW PRODUCT IS AVAILABLE</h5>
              <h1 className='fw-bold'>
                <TextLoop>
                  <span>Single-Rotor Drones</span>
                  <span>Multi-Rotor Drones</span>
                  <span>Fixed-Wing Drones</span>
                  <span>Small Drones</span>
                </TextLoop>{' '}
                <br /> is available in Drone Fleet
              </h1>
            </div>
            <div className='col-md-6 col-sm-12'>
              <img style={{ width: '110%' }} src={headerImg} alt='' />
            </div>
          </div>
        </div>
        <div className='d-flex align-items-center justify-content-center mt-5'>
          <Link to='/drones'>
            <Button className="rounded-circle round-button">See More <br /> Product</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
