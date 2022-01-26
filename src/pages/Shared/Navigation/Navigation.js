import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../../images/lightLogo.png'
import useAuth from '../../context/useAuth'
import './Navigation.css'

const Navigation = () => {
  const { user, handleSignOut } = useAuth()

  const activeStyle = {
   
    color: 'rgb(234, 196, 12)'
  }
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
          <NavLink to='/'>
            <img style={{ width: '100px' }} src={logo} alt='' />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink activeStyle={activeStyle} to='/drones'>
              Drones
            </NavLink>
            <NavLink activeStyle={activeStyle} to='/about'>
              About Us
            </NavLink>
          </Nav>
          <Nav>
            <NavLink  to='/dashboard'>
              Dashboard
            </NavLink>
            {user?.email && (
              <p style={{ color: 'rgb(234,196,12)', padding: '20px' }}>
                {user.displayName}
              </p>
            )}
            {user?.email ? (
              <Button
                style={{
                  backgroundColor: 'rgb(234,196,12)',
                  borderColor: 'rgb(234,196,12)'
                }}
                onClick={handleSignOut}
              >
                logout
              </Button>
            ) : (
              <NavLink activeStyle={activeStyle} to='/register'>
                Register
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
