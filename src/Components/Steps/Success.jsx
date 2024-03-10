import React from "react";
import Button from '../Button.jsx'
import "./modal.css";
import { FaCheck} from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

export const Success = () => {
    return (
        <div className='steps'>
            <div className='first-stepOne'>
                <span className='successStepOne'>Step1
                    <FaCheck className='check-icon' />
                </span>
                <span className='successStepOne'>Step2
                    <FaCheck className='check-icon' />
                </span>                
                <span className='successStepThree'>Success</span>
            </div>
            <div className='successBody'>
                <div className='divOne'>
                    <div className='divTwo'>
                        <FaCheck className='success-icon' />
                    </div>
                </div>
            </div>
            <div className='successEnd'>
                <div className='successEndText'>
                    Thanks for reaching us!
                </div>
                <div className='successEndTextTwo'>
                    Your message sent. We’ll contact back with you soon!
                </div>                        
            </div>
            <Link to="/">
                <Button className="success-button">
                    <span className='successButtonText'>Back to Home</span>
                </Button>
            </Link>
        </div>
    );
}