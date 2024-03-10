import React from 'react';
import { FaRegFlag, FaRegComment, FaRegFolder } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import '../icon.css';
import '../text.css';
import './dropdown.css';

const MenuDropdown = () => {
    return (
        <div className="menuDropdown">
            <div className="flex-container">
                <a className='us-link'>
                    <div className="us-icon">
                        <FaRegFlag className="icon" />
                    </div>
                    <div className="us-content">
                        <span className='textAbout'>About us</span>
                        <span className='text'>Learn about our story and our mission statement.</span>
                    </div>
                </a>
                <a className='us-link'>
                    <div className="us-icon">
                        <FaRegComment className="icon" />   
                                             
                    </div>
                    <div className="us-content">
                        <span className='textAbout'>Press</span>
                        <span className='text'>News and writings, press releases, and resources.</span>
                    </div>
                </a>
                <a className='us-link'>
                    <div className="us-icon">
                        <FiUsers className="icon" />                        
                    </div>
                    <div className="us-content">
                        <span className='textAbout'>Careers</span>
                        <span className='text'>We’re always looking for talented people. Join us!</span>
                    </div>
                </a>
                <a className='us-link'>
                    <div className="us-icon">
                        <FaRegFolder className="icon" />                        
                    </div>
                    <div className="us-content">
                        <span className='textAbout'>Legal</span>
                        <span className='text'>All the boring stuff that we Dan from legal made us add.</span>
                    </div>
                </a>
            </div>
            <div className="footer">
                 <span className='text-footer'>Looking for a new career? Get in touch</span>
            </div>
        </div>
    );
};

export default MenuDropdown;