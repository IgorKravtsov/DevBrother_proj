import React, {FC, useEffect, useState} from 'react';
import styles from './productInfo.module.scss';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import {ISwapiPeople} from "../../models/swapi-response/IPeopleResponse";
import {ISwapiStarship} from "../../models/swapi-response/IStarshipResponse";
import {LocalstorageKey} from "../../types/LocalstorageKey";
import {LocalstorageValue} from "../../types/LocalstorageValue";
import ProductInfoHeader from "../../sections/productsInfoView/productInfoHeader/ProductInfoHeader";
import ProductCardsView from "../../sections/productsInfoView/productCardsView/ProductCardsView";
import ProductListView from "../../sections/productsInfoView/productListView/ProductListView";
import {IProductImage, peopleImages, starshipImages} from "./assets/productImages";

export interface ProductInfoPageProps {

}

const ProductInfoPage:FC<ProductInfoPageProps> = () => {
    const [nowData, setNowData] = useState<ISwapiPeople[] | ISwapiStarship[]>([]);
    const [nowView, setNowView] = useState('');
    const [nowImages, setNowImages] = useState<IProductImage[]>([]);

    const swapiData = useTypedSelector(state => state.swapiReducer);

    const {type} = useParams();

    useEffect(() => {
        if(type === 'starships') {
            setNowData(swapiData.starships.data);
            setNowImages(starshipImages);
        } else {
            setNowData(swapiData.people.data);
            setNowImages(peopleImages);
        }
        const view = localStorage.getItem(LocalstorageKey.ProductsView) || LocalstorageValue.ProductCardView;
        setNowView(view);
    }, [])

    const changeView = (viewToChange: string) => {
        localStorage.setItem(LocalstorageKey.ProductsView, viewToChange);
        setNowView(viewToChange);
    }

    return (
        <main className={styles.wrapper}>
            <ProductInfoHeader setView={changeView} nowView={nowView}/>
            {nowView === LocalstorageValue.ProductCardView ?
                <ProductCardsView type={type === 'starships' ? 'starships':'people'} data={nowData} images={nowImages}/> :
                <ProductListView type={type === 'starships' ? 'starships':'people'} data={nowData} images={nowImages}/>}
        </main>
    );
};

export default ProductInfoPage;