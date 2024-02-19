import './App.css'
import Home from './pages/Home/Home/Home'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllProducts from './pages/AllProducts/AllProducts'
import NotFound from './pages/NotFound/NotFound'
import AboutUs from './pages/AboutUs/AboutUs'
import Register from './pages/Register/Register'
import Login from './pages/Register/Login'
import AuthProvider from './pages/context/AuthProvider'
import initializeAuthentication from './pages/Register/firebase/firebase.init'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import PrivateRoute from './pages/Register/PrivateRoute/PrivateRoute'
import Dashboard from './pages/Dashboard/Dashboard/Dashboard'
import Review from './pages/Review/Review'


initializeAuthentication()
function App () {
  
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/drones'>
              <AllProducts />
            </Route>
            {/* <Route exact path='/reviews'>
              <Review />
            </Route> */}
            <Route exact path='/about'>
              <AboutUs />
            </Route>
            <PrivateRoute exact path='/drones/:productId'>
              <ProductDetail />
            </PrivateRoute>

            <PrivateRoute path='/dashboard'>
              <Dashboard />
            </PrivateRoute>

            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/register'>
              <Register />
            </Route>
            <Route path='/*'>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
