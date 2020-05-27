import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import About from './About.js';
import Signup from './signup.js';
//import App from '../App.css';


const Navbar=()=>{
    return(
      <nav className="nav-wrapper red">
          <div className="container">
          <a className="brand-logo">Foodyelp</a>
          <ul className="right">
            <li> <Link to="/home">Home</Link></li>
            
            <li><Link to ="/signup"> Signup </Link></li>
            <li><Link to="/About"> About </Link> </li>
            
            </ul>
              </div>
              
        
      </nav>
      
      
         


    );
};
export default Navbar