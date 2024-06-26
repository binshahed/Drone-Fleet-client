import React, { useState } from "react";

import * as AiIcons from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBars,
  faShoppingBag,
  faSignOutAlt,
  faStarHalfAlt,
  faHandHoldingUsd,
  faUserShield,
  faPlus,
  faSort,
  faTasks,
  faAlignRight,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

import useAuth from "../../context/useAuth";

function Navbar() {
  const [sidebar, setSidebar] = useState(true);
  let { path, url } = useLocation();
  const { admin, handleSignOut } = useAuth();

  const showSidebar = () => setSidebar(!sidebar);

  const activeStyle = {
    color: "rgb(234, 196, 12)",
  };

  return (
    <div className="dashboard">
      <div className="navbar ">
        <NavLink to="#" className="menu-bars">
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#fff" }}
            onClick={showSidebar}
          />
        </NavLink>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <NavLink to="#" className="menu-bars" onClick={showSidebar}>
              <AiIcons.AiOutlineClose />
            </NavLink>
          </li>
          <NavLink to="/">
            <h5>
              <FontAwesomeIcon
                icon={faCaretLeft}
                style={{ color: "#fff", marginRight: "20px" }}
              />
              Back To Site
            </h5>
          </NavLink>
          <NavLink to="">
            <h5>
              <FontAwesomeIcon
                icon={faHome}
                style={{ color: "#fff", marginRight: "20px" }}
              />
              Home
            </h5>
          </NavLink>

          <NavLink to={`myorders`}>
            <h5>
              <FontAwesomeIcon
                icon={faShoppingBag}
                style={{ color: "#fff", marginRight: "20px" }}
              />
              My Orders
            </h5>
          </NavLink>
          <NavLink to={`pay`}>
            <h5>
              <FontAwesomeIcon
                icon={faHandHoldingUsd}
                style={{ color: "#fff", marginRight: "20px" }}
              />
              Pay
            </h5>
          </NavLink>
          <NavLink to={`review`}>
            <h5>
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{ color: "#fff", marginRight: "20px" }}
              />
              Review
            </h5>
          </NavLink>

          {admin && (
            <div>
              <NavLink to={`manageOrder`}>
                <h5>
                  <FontAwesomeIcon
                    icon={faSort}
                    style={{ color: "#fff", marginRight: "20px" }}
                  />
                  Manage All Orders
                </h5>
              </NavLink>
              <NavLink to={`addProduct`}>
                <h5>
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ color: "#fff", marginRight: "20px" }}
                  />
                  Add A Product
                </h5>
              </NavLink>
              <NavLink to={`makeAdmin`}>
                <h5>
                  <FontAwesomeIcon
                    icon={faUserShield}
                    style={{ color: "#fff", marginRight: "20px" }}
                  />
                  Make Admin
                </h5>
              </NavLink>
              <NavLink to={`manageProducts`}>
                <h5>
                  <FontAwesomeIcon
                    icon={faTasks}
                    style={{ color: "#fff", marginRight: "20px" }}
                  />
                  Manage Products
                </h5>
              </NavLink>
            </div>
          )}
          <button
            style={{
              background: "none",
              border: "none",
              margin: "20px 0 0 0",
              padding: "0",
            }}
            onClick={handleSignOut}
          >
            <h5 style={{ color: "rgb(234, 196, 12)", marginRight: "20px" }}>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ marginRight: "20px" }}
              />
              LogOut
            </h5>
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
