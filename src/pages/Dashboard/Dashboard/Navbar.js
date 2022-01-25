import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faBars,
  faShoppingBag
} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'

function Navbar () {
  const [sidebar, setSidebar] = useState(false)
  let { path, url } = useRouteMatch()

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className='dashboard'>
      <div className='navbar '>
        <Link to='#' className='menu-bars'>
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: '#fff' }}
            onClick={showSidebar}
          />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          <Link to={`${path}`}>
            <h5>
              <FontAwesomeIcon
                icon={faHome}
                style={{ color: '#fff', marginRight: '20px' }}
              />
              Home
            </h5>
          </Link>
          <Link to={`${url}/orderList`}>
            <h5>
              <FontAwesomeIcon
                icon={faShoppingBag}
                style={{ color: '#fff', marginRight: '20px' }}
              />
              Orders
            </h5>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
