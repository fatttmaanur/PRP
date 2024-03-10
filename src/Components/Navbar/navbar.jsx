import React, { useState } from 'react';
import './navbar.css';
import MenuDropdown from './MenuDropdown'; 
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isUpIcon, setIsUpIcon] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen); 
        setIsUpIcon(!isUpIcon); 
    };

    return (
        <nav className="navbar" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <ul className="navbar-nav" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <li className="nav-item">
                    <a className="nav-link home" href="#">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link resources" href="#" onClick={toggleDropdown}>
                        Resources
                        {isUpIcon ? <IoIosArrowUp className='down-icon' /> : <IoIosArrowDown className='down-icon' />}
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link pricing" href="#">
                        Pricing
                    </a>
                </li>
            </ul>
            {isDropdownOpen && <MenuDropdown />}
        </nav>
    );
};

export default Navbar;