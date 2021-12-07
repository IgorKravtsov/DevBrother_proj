import React from 'react';
import {Link} from "react-router-dom";
import {RouteNames} from "../../routes";
import styles from './mainPage.module.scss';

const MainPage = () => {

    return (
        <main className={styles.wrapper}>
            <Link className={styles.link} to={RouteNames.LOGIN}>
                <h5 className={styles.text}>LOGIN</h5>
            </Link>
            <Link className={styles.link} to={RouteNames.PRODUCTS}>
                <h5 className={styles.text}>PRODUCTS</h5>
            </Link>
            <Link className={styles.link} to={RouteNames.CART}>
                <h5 className={styles.text}>Cart</h5>
            </Link>
        </main>
    );
};

export default MainPage;