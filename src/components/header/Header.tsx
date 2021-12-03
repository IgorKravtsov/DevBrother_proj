import React, {FC, ReactElement, useEffect, useState} from 'react';
import styles from './header.module.scss';
import backArrow from './img/backArrow.svg';
import cart from './img/cart.svg';
import {useNavigate} from "react-router-dom";
import PanelCartPanel from "../panelCartCount/PanelCartPanel";
import {useActions} from "../../hooks/useActions";
import * as util from "../../util";
import {LocalstorageKey} from "../../types/LocalstorageKey";
import {setPeopleFromLocalstorageToRedux, setStarshipsFromLocalstorageToRedux} from "../../store/actions/_app/cart";

export interface HeaderProps {

}

const Header:FC<HeaderProps> = (): ReactElement => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    // const {setPeopleFromLocalstorageToRedux, setStarshipsFromLocalstorageToRedux} = useActions();

    useEffect(() => {
        saveCartFromLocalstorageToRedux();
    }, [])

    const saveCartFromLocalstorageToRedux = () => {
        const people = util.getCartFromLocalstorage(LocalstorageKey.CartPeople),
            starships = util.getCartFromLocalstorage(LocalstorageKey.CartStarships);

        people.length > 0 && setPeopleFromLocalstorageToRedux(people);
        starships.length > 0 && setStarshipsFromLocalstorageToRedux(starships);
    }

    const switchVisible = (bool: boolean) => {
        setIsVisible(bool);
    }

    return (
        <header className={styles.header}>
            <p className={styles.img_wrapper}>
                <img onClick={(e) => navigate(-1)} className={styles.img} src={backArrow} alt="Back"/>
            </p>
            <p className={styles.img_wrapper}>
                <img
                    onMouseEnter={() => switchVisible(true)}
                    onMouseLeave={() => switchVisible(false)}
                    className={styles.img} src={cart} alt="cart"/>
            </p>
            <PanelCartPanel isVisible={isVisible}/>
        </header>
    );
};

export default Header;