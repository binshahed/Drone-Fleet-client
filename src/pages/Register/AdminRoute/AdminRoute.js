
import React from 'react'
import { Spinner } from 'react-bootstrap'
import { Redirect, Route } from 'react-router'
import useAuth from '../../context/useAuth'

const AdminRoute = ({ children, ...rest }) => {
  const { user,admin, isLoading } = useAuth()
  if (!admin?.role==='admin') {
    return <Spinner animation="border" variant="danger" />
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/dashboard',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default AdminRoute
