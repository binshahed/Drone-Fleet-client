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


function App() {
  return (
    <div >
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/drones">
            <AllProducts />
          </Route>
          <Route  path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
