import React, { useState } from 'react'

import { Route, Switch } from 'react-router-dom'
import './Navbar.css'

import DashboardHome from '../DashboardPage/DashboardHome'
import Navbar from './Navbar'
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
import OrderList from '../DashboardPage/OrderList'

function Dashboard () {
  let { path, url } = useRouteMatch()
  console.log(path);
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact  path={`${path}`}>
          <DashboardHome />
        </Route>
        <Route  path={`${path}/orderList`}>
          <OrderList />
        </Route>
      </Switch>
    </>
  )
}

export default Dashboard
