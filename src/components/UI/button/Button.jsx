import React from "react";
import classes from './Button.module.css';

const Button = ({children, ...props}) => {
    return (
        <button className={classes.my_btn} {...props}>
            {children}
        </button>
    );
};

export default Button;