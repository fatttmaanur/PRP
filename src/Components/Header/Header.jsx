import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/navbar.jsx';
import Logo from '../Logo.js';
import Button from '../Button.jsx';
import './header.css';

export const Header = () => {
    return (
        <div className="custom-div">
            <Logo />
            <div>
                <Navbar />
            </div>
            <div>
                <Link to="/stepOne">
                    <Button>Contact us</Button>
                </Link>
            </div>
        </div>
    );
}

export default Header;