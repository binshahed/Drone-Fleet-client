import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link, Route, Switch } from 'react-router-dom'
import './Navbar.css'

import { SidebarData } from './SidebarData'
import Home from '../../Home/Home/Home'

function Dashboard () {
  return (
    <>
      <Switch>
        <Route path='/orderCollection' exact component={Home} />
        {/* <Route path='/reports' component={Reports} />
        <Route path='/products' component={Products} /> */}
      </Switch>
    </>
  )
}

export default Dashboard
