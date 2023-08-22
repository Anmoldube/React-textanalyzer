import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Navbar(props) {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="nav mx-3  mt-2">
        <img src='/image/logo1.png' alt="logo1.jpg" width="98" height="40" />
        <div></div>
        <div className="navbar mx- "></div>
        <ul className="nav mx-5 justify-content-center">
          <div className="mx-3"></div>
          <li className="nav-item md-4">
            <Link className="nav-link text-color-blue text-blue active" aria-current="page" color="blue" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-blue" to="/About"> {/* Use Link instead of links */}
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-blue" to="/LinksFor"> {/* Use Link instead of links */}
              Links
            </Link>
          </li>
        </ul>

        <div className="mx-1"></div>
        <div className="mx-5"></div>
        <div className="mx-5"></div>
        <div className="mx-5"></div>
        <div className="mx-5"></div>
        <div className="mx-5"></div>
        <div className='mx-3'></div>
        <div className="form-check form-switch mx-5">
          <input
            className="form-check-input mx-2 mt-3"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.handleThemeToggle}
            checked={darkMode}
            onChange={handleThemeToggle}
          />
          <label className="modeswitch-icon text-light mt-2" htmlFor="flexSwitchCheckDefault" onClick={props.handleThemeToggle}>
            <div div className='text-bg-info' onClick={props.handleThemeToggle}> Theme </div>
          </label>
        </div>
      </div>
    </nav>
  );
}
