import React from 'react';

import styles from './form.module.scss';

const Form = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div className={styles.wrapper}>
                {props.children}
            </div>
        </form>
    );
};

export default Form;