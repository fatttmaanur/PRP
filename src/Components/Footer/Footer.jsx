import React from 'react';
import '../Home/home.css'
import Logo from '../Logo.js'

export const Footer = () => {
   
    return (
        <div className='footer-end'>
            <Logo />
            <div className='footer-div'>
                <span className='footer-first-text'>Home</span>
                <span className='footer-first-text'>About Us</span>
                <span className='footer-first-text'>Press</span>
                <span className='footer-first-text'>Careers</span>
                <span className='footer-first-text'>Help</span>
                <span className='footer-first-text'>Privacy</span>
           </div>    
           <span className='footer-end-text'>© 2023 PR Yazılım. All rights reserved.</span>
        </div>
    );
}