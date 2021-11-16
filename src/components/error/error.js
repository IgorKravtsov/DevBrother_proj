import React from 'react';

import styles from './error.module.scss';

const Error = (props) => {
    const [classes, setClasses] = React.useState(`${styles.error} ${props.classes }`);
    // let classes = `${styles.error} ${props.classes }` + props.isVisible ? styles.error_visible : '';

    React.useEffect(() => {
        props.isVisible ?
            setClasses(`${styles.error} ${props.classes } ${styles.error_visible}`)
            :
            setClasses(`${styles.error} ${props.classes }`)
    }, [props.isVisible])

    // React.useEffect(() => {
    //     if(props.isVisible) {
    //         setVisibleErrorClass(styles.error_visible);
    //     } else {
    //         setVisibleErrorClass('');
    //     }
    // }, [])

    return (
        <div className={classes}>
            {props.children}
        </div>
    );
};

export default Error;