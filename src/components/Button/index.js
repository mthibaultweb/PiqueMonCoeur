import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = ({children,action}) => {

    return (
        <button onClick={action}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    
};

Button.propTypes = {};

export default Button;