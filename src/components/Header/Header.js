import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="nav">
            <ul style={{marginRight: '50px'}}>
         
              <li><Link to="/home"><img className="logo" src={logo} alt=""/></Link> </li>

            
              
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/">Donation</Link>
              </li>
              <li>
                  <Link to="/">Events</Link>
              </li>
              <li>
                  <Link to="/">Blog</Link>
              </li>
              <li>
                  
                <Link to="/login"><Button variant="primary">Register</Button></Link>
                  
              </li>
              <li>
              <Link to="/login"><Button variant="dark">Admin</Button></Link>
              </li>
          </ul>

     </nav>
        </div>
    );
};

export default Header;