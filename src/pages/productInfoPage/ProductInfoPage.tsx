import React, {FC, useEffect, useState} from 'react';
import styles from './productInfo.module.scss';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useNavigate, useParams} from "react-router-dom";
import {LocalstorageKey} from "../../types/LocalstorageKey";
import {LocalstorageValue} from "../../types/LocalstorageValue";
import ProductInfoHeader from "../../sections/productsInfoView/productInfoHeader/ProductInfoHeader";
import ProductCardsView from "../../sections/productsInfoView/productCardsView/ProductCardsView";
import ProductListView from "../../sections/productsInfoView/productListView/ProductListView";
import {peopleImages, starshipImages} from "../assets/productImages";
import {useActions} from "../../hooks/useActions";
import * as util from "../../util";
import {RouteNames} from "../../routes";
import Spinner from "../../components/spinner/Spinner";

export interface ProductInfoPageProps {

}

const ProductInfoPage:FC<ProductInfoPageProps> = () => {
    const [nowView, setNowView] = useState(localStorage.getItem(LocalstorageKey.ProductsView) || LocalstorageValue.ProductCardView);

    const swapiData = useTypedSelector(state => state.swapiReducer);
    const {getPeopleData, getStarshipsData, setStarshipsFromLocalstorageToRedux, setPeopleFromLocalstorageToRedux} = useActions();
    const {starships, people} = useTypedSelector(state => state.cartReducer);
    const {type} = useParams();
    const navigate = useNavigate();

    const isStarships = type === 'starships';
    useEffect(() => {
        if(swapiData.people.data.length === 0 && swapiData.starships.data.length === 0) {
            isStarships ? getStarshipsData() : getPeopleData();
        }
        // saveCartFromLocalstorageToRedux();
    }, [])

    useEffect(() => {
        const err = isStarships ? swapiData.starships.error : swapiData.people.error;
        if(err) {
            navigate(RouteNames.ERROR);
        }
    }, [swapiData.people.error, swapiData.starships.error])

    useEffect(() => {
        // return () => {
            util.saveCartToLocalstorage(people, starships)
        // }
    }, [starships, people])

    // const saveCartFromLocalstorageToRedux = () => {
    //     const people = util.getCartFromLocalstorage(LocalstorageKey.CartPeople),
    //         starships = util.getCartFromLocalstorage(LocalstorageKey.CartStarships);
    //     setPeopleFromLocalstorageToRedux(people);
    //     setStarshipsFromLocalstorageToRedux(starships);
    // }

    const changeView = (viewToChange: string) => {
        localStorage.setItem(LocalstorageKey.ProductsView, viewToChange);
        setNowView(viewToChange);
    }

    return (
        <>
            <main className={styles.wrapper}>
            <ProductInfoHeader setView={changeView} nowView={nowView}/>
                {swapiData.starships.isLoading || swapiData.people.isLoading ?
                    <Spinner/> : null}  
                {nowView === LocalstorageValue.ProductCardView ?
                    <ProductCardsView
                        test="test"
                        type={isStarships ? 'starships':'people'}
                        data={isStarships ? swapiData.starships.data : swapiData.people.data}
                        images={isStarships ? starshipImages : peopleImages}
                    /> :
                    <ProductListView
                        type={isStarships ? 'starships':'people'}
                        data={isStarships ? swapiData.starships.data : swapiData.people.data}
                        images={isStarships ? starshipImages : peopleImages}
                    />}
            </main>
        </>
    );
};

export default ProductInfoPage;