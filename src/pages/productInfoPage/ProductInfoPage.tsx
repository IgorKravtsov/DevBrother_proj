import React, {FC, useEffect, useState} from 'react';
import styles from './productInfo.module.scss';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import {ISwapiPeople} from "../../interfaces/swapi-response/IPeopleResponse";
import {ISwapiStarship} from "../../interfaces/swapi-response/IStarshipResponse";
import {LocalstorageKey} from "../../types/LocalstorageKey";
import {LocalstorageValue} from "../../types/LocalstorageValue";
import ProductInfoHeader from "../../sections/productsInfoView/productInfoHeader/ProductInfoHeader";
import ProductCardsView from "../../sections/productsInfoView/productCardsView/ProductCardsView";
import ProductListView from "../../sections/productsInfoView/productListView/ProductListView";
import {IProductImage, peopleImages, starshipImages} from "./assets/productImages";
import {useActions} from "../../hooks/useActions";

export interface ProductInfoPageProps {

}

const ProductInfoPage:FC<ProductInfoPageProps> = () => {
    const [nowView, setNowView] = useState(localStorage.getItem(LocalstorageKey.ProductsView) || LocalstorageValue.ProductCardView);

    const swapiData = useTypedSelector(state => state.swapiReducer);
    const {getPeopleData, getStarshipsData} = useActions();

    const {type} = useParams();

    const isStarships = type === 'starships';
    useEffect(() => {
        if(swapiData.people.data.length === 0 && swapiData.starships.data.length === 0) {
            isStarships ? getStarshipsData() : getPeopleData();
        }
    }, [])

    const changeView = (viewToChange: string) => {
        localStorage.setItem(LocalstorageKey.ProductsView, viewToChange);
        setNowView(viewToChange);
    }

    return (
        <>
            <ProductInfoHeader setView={changeView} nowView={nowView}/>
            <main className={styles.wrapper}>
                {nowView === LocalstorageValue.ProductCardView ?
                    <ProductCardsView
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