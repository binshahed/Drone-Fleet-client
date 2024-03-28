import React from 'react'
import './Footer.css'
import logo from '../../images/lightLogo.png'

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1520870121499-7dddb6ccbcde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)'
      }}
    >
      <div
        className='text-light'
        style={{
          padding: '100px 0 0 0',
          backgroundColor: 'rgba(116, 115, 115, 0.8)'
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-sm-12'>
              <img
                style={{ width: '200px' }}
                className='py-4'
                src={logo}
                alt=''
              />
              <p className='py-4'>
                drone fleet is the largest UAV dealer in the United States
                and we are DJI's largest and most experienced authorized sales
                center in the United States.
              </p>
            </div>
            <div className='col-md-4 col-sm-12'>
              <h3 className='py-4 text-warning'>Others Site</h3>
              <p className='py-1 px-3'>
                <a href="https://tripo-4c919.web.app/">Tripo</a>
              </p>
              <p className='py-1 px-3'>
                <a href="https://care-now-8bae1.web.app/">Care Now</a>
              </p>
              <p className='py-1 px-3'>
                <a href="https://heuristic-snyder-e143bf.netlify.app/">Nota Corda</a>
              </p>
            </div>
            <div className='col-md-4 col-sm-12'>
              <h3 className='py-4 text-warning'>Contact Us</h3>
              <p className=' px-3'>
                Address: 1380 Pear Ave, Mountain View, CA 94043
              </p>

              <p className=' px-3'>Call: +1 23 526 8679</p>

              <div className=' px-3'>Email: info@example.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className='' style={{ backgroundColor: 'rgba(116, 115, 115, 0.9)' }}>
        <p className='m-0 text-center text-white p-3'>
          Copyright ©2021 All rights reserved | Design & Developed By by{' '}
          <a
            className='text-warning text-decoration-none'
            href='https://www.facebook.com/BINSHAHED/'
          >
            Shahed Ahmed.
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
