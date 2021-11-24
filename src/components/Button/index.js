import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = ({children, to}) => {

    return (
        <Link to={to}>
            <button>
                {children}
            </button>
        </Link>
    );
};

Button.defaultProps = {
    
};

Button.propTypes = {};

export default Button;