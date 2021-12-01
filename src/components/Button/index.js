import React from 'react'
import styles from './Button.module.css'

const Button = ({children,action,className}) => {

    return (
        <button className={className} onClick={action}>
            {children}
        </button>
    );
};

export default Button;