import React from 'react';

import styles from './input.module.scss';

const Input = (props) => {
    return (
        <input className={`${styles.input} ${props.classes}`} {...props}/>
    );
};

export default Input;