import React from 'react';
import './button.css';

const Button = ({ children, className,onClick }) => {
    return (
        <button className={`custom-button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;