import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../../images/lightLogo.png'
import './Navigation.css'

const Navigation = () => {
  return (
    <Navbar
      style={{ background: '#737373' }}
      collapseOnSelect
      fixed='top'
      expand='lg'
      variant='dark'
    >
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            <img style={{ width: '100px' }} src={logo} alt='' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Link to='/drones'>Drones</Link>
            <Link to='/drones'>Drones</Link>
          </Nav>
          <Nav>
          <Link to='/drones'>Drones</Link>
          <Link to='/drones'>Drones</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
