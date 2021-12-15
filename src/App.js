import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllProducts from './pages/AllProducts/AllProducts';
import NotFound from './pages/NotFound/NotFound';
import AboutUs from './pages/AboutUs/AboutUs';
import Register from './pages/Register/Register';
import Login from './pages/Register/Login';
import AuthProvider from './pages/context/AuthProvider';
import initializeAuthentication from './pages/Register/firebase/firebase.init'
import ProductDetail from './pages/ProductDetail/ProductDetail';
import PrivateRoute from './pages/Register/PrivateRoute/PrivateRoute';

initializeAuthentication()
function App() {
  return (
    <div >
      <AuthProvider>
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/drones">
            <AllProducts />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <PrivateRoute exact path="/drone/:productId">
            <ProductDetail />
          </PrivateRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route  path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
