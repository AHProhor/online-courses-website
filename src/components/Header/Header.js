import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="nav-style">
            <div className="web-name-style">
            <h4>DREAMcLASS</h4>
            </div>
            <div className="nav-style">   
            <Link to="/home">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/feedback">FeedBack</Link>
            <Link to="/about">About</Link>
            </div>
        </div>
        
    );
};

export default Header;