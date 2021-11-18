import React, {useEffect, useState} from 'react';

import styles from './error.module.scss';

const Error = (props) => {
    const [classes, setClasses] = useState(`${styles.error} ${props.classes }`);
    // let classes = `${styles.error} ${props.classes }` + props.isVisible ? styles.error_visible : '';

    useEffect(() => {
        props.isVisible ?
            setClasses(`${styles.error} ${props.classes } ${styles.error_visible}`)
            :
            setClasses(`${styles.error} ${props.classes }`)
    }, [props.isVisible])

    return (
        <div className={[styles.error, props.classes, props.isVisible &&styles.error_visible ].filter(Boolean).join(' ')}>
            {props.children}
        </div>
    );
};

export default Error;