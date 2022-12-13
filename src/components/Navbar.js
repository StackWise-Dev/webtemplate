import React from "react";
import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";


export default function Navbar() {

    let activeStyle = {
        color : "#000"
    }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto nav-wrapper">
          <nav className="nav-bar navbar navbar-expand-lg">
            <div className="container-fluid">
              <div>
                <NavLink className="navbar-brand" to="/">
                  SipherTech
                </NavLink>
              </div>
              <button
                className="navbar-toggler nav-icon"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 z-index-1">
                  <li className="nav-item">
                  <NavLink className="link" to="/components/home" style={({isActive}) => isActive ? activeStyle : undefined}>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="link" to="/components/services" style={({isActive}) => isActive ? activeStyle : undefined}>
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="link" to="/components/about" style={({isActive}) => isActive ? activeStyle : undefined}>
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="link" to="/components/contact" style={({isActive}) => isActive ? activeStyle : undefined}>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
