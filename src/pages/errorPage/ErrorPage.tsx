import React from 'react';
import styles from './errorPage.module.scss';
import {useNavigate} from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <main className={styles.wrapper}>
            <h1 className={styles.title}>AN ERROR OCCURED!</h1>
            <p className={styles.link} onClick={() => navigate(-2)}>to previous page --&gt;</p>
        </main>
    );
};

export default ErrorPage;