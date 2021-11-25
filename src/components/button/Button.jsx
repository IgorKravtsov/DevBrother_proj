import React from 'react';

import styles from './button.module.scss';

const Button = (props) => {
    return (
        <button className={`${styles.btn} ${props.classes}`}>
            {props.children}
        </button>
    );
};

export default Button;