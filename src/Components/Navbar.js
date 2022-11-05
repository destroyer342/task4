import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        
      <nav>

        <div class="nav-wrapper">
        <a className="brand-logo">
              RANCE TASK 4
            </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">

            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
            <Link to='/contact'>Contacts</Link> 
            </li>
            <li>
            <Link to='/about'>About</Link> 
            </li>
            <li>
            <Link to='/signup'>Signup</Link> 
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
