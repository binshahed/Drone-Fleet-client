import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../../images/lightLogo.png'
import useAuth from '../../context/useAuth'
import './Navigation.css'

const Navigation = () => {
  const { user, handleSignOut } = useAuth()
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
            <Link to='/about'>About Us</Link>
          </Nav>
          <Nav>
            <Link to='/drones'>Drones</Link>
            {user?.email && <span>{user.displayName}</span>}
            {user?.email ? (
              <Button onClick={handleSignOut}>logout</Button>
            ) : (
              <Link to='/register'>Register</Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
