import React, {FC, ReactElement, useEffect, useState} from 'react';
import styles from './header.module.scss';
import backArrow from './img/backArrow.svg';
import cart from './img/cart.svg';
import {useNavigate} from "react-router-dom";
import PanelCartPanel from "../panelCartCount/PanelCartPanel";
import {useActions} from "../../hooks/useActions";
import * as util from "../../util";
import {LocalstorageKey} from "../../types/LocalstorageKey";
// import {setPeopleFromLocalstorageToRedux, setStarshipsFromLocalstorageToRedux} from "../../store/actions/_app/cart";
import {setPeopleFromLocalstorageToCart, setStarshipsFromLocalstorageToCart} from '../../store/slices/cartSlice';
import {useDispatch} from "react-redux";
import Portal from "../portal/Portal";
import CartSection from "../../sections/cartSection/CartSection";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export interface HeaderProps {

}

const Header:FC<HeaderProps> = (): ReactElement => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [isPortalVisible, setIsPortalVisible] = useState(false);

    // const {setPeopleFromLocalstorageToRedux, setStarshipsFromLocalstorageToRedux} = useActions();

    const {people, starships} = useTypedSelector(state => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        saveCartFromLocalstorageToRedux();
    }, [])

    const saveCartFromLocalstorageToRedux = () => {
        const people = util.getCartFromLocalstorage(LocalstorageKey.CartPeople),
            starships = util.getCartFromLocalstorage(LocalstorageKey.CartStarships);

        people.length > 0 && dispatch(setPeopleFromLocalstorageToCart(people));
        starships.length > 0 && dispatch(setStarshipsFromLocalstorageToCart(starships));
    }

    useEffect(() => {
        util.saveCartToLocalstorage(people, starships)
    }, [people, starships])

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
                    onClick={() => setIsPortalVisible(true)}
                    onMouseEnter={() => switchVisible(true)}
                    onMouseLeave={() => switchVisible(false)}
                    className={styles.img} src={cart} alt="cart"/>
            </p>
            <PanelCartPanel isVisible={isVisible}/>
            <Portal>
                {isPortalVisible && <CartSection closeFunc={() => setIsPortalVisible(false)}/>}
            </Portal>
        </header>
    );
};

export default Header;