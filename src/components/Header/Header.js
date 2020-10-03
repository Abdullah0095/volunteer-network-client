import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="nav">
         
              <li><Link to="/home"><img className="logo" src={logo} alt=""/></Link> </li>

            <ul style={{marginLeft: '300px'}}>
              
              <li>
                  <Link to="/home">Home</Link>
              </li>
              <li>
                  <Link to="/login">Donation</Link>
              </li>
              <li>
                  <Link to="/login">Events</Link>
              </li>
              <li>
                  <Link to="/login">Blog</Link>
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