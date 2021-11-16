import React from 'react';
import styles from './registerPage.module.scss';
import RegisterSection from "../../sections/registerSection/registerSection";


const RegisterPage = () => {
    return (
        <div className={styles.wrapper}>
            <RegisterSection/>
        </div>
    );
};

export default RegisterPage;