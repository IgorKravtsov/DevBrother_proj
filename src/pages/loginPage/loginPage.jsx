import React from 'react';
import LoginSection from "../../sections/loginSection/loginSection";
import styles from './loginPage.module.scss';

const LoginPage = () => {
    return (
        <div className={styles.wrapper}>
            <LoginSection/>
        </div>
    );
};

export default LoginPage;