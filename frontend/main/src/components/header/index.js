import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../resources/images/logo final.png"
import { isAuthenticated } from "../../auth";

const Navbar = ({ children }) => {
  const [click, setClick] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const init = () => {
    setIsLogin(isAuthenticated());
  }

  useEffect(() => {
    init();
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Property', to: '/property' },
    { name: 'Videos', to: '/videos' },
    { name: 'News', to: '/news' },
    { name: 'About', to: '/About' },
    { name: 'Login', to: '/login' },
  ]

  const loginNavLinks = [
    { name: 'Home', to: '/' },
    { name: 'Property', to: '/property' },
    { name: 'Video', to: '/videos' },
    { name: 'News', to: '/news' },
    { name: 'About', to: '/About' },
    { name: 'Dashboard', to: '/profile' },
    { name: 'Logout', to: '/logout' },
  ]


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo " onClick={closeMobileMenu}>
            <div className=""><img src={Logo} alt="Addis Hiwot Logo" width="60px"
              height="60px" className="mr-2" /></div>
            Adiss Hiwot
          </Link>

          <div className="menu-icon" onClick={handleClick} style={{ zIndex: '1000', position: "fixed" }}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {
              isLogin === true &&
              loginNavLinks.map((nav, index) =>
                <li className="nav-item" key={index}>
                  <NavLink
                    to={nav.to}
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}>
                    {nav.name}
                  </NavLink>
                </li>
              )
            }
            {
              isLogin === false &&
              navLinks.map((nav, index) =>
                <li className="nav-item" key={index}>
                  <NavLink
                    to={nav.to}
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}>
                    {nav.name}
                  </NavLink>
                </li>
              )
            }
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;