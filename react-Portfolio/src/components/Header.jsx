import React from 'react';
import { Link } from 'react-router-dom';
import Develop from '../assets/developer.png'

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand  shadow-lg p-1 mb-5 " style={{backgroundColor: '#333'}}>
        <div class="container-fluid" >
        <div>
            <img src={Develop}/>
        </div>
        <div>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <Link to="/" className="nav-link link-info" >About</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link link-info">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link link-info" >Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-link link-info">Resume</Link>
          </li>
        </ul>
        </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;