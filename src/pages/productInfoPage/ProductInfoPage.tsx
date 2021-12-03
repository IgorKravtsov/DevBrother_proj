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
import {starships} from "../../store/actions/_request/starships";
import {people} from "../../store/actions/_request/people";
import {StateStatus} from "../../interfaces/StateStatus";
import {useDispatch} from "react-redux";

export interface ProductInfoPageProps {

}

const ProductInfoPage:FC<ProductInfoPageProps> = () => {
    const [nowView, setNowView] = useState(localStorage.getItem(LocalstorageKey.ProductsView) || LocalstorageValue.ProductCardView);

    const {getAllStarships} = useTypedSelector(state => state.request.starships);
    const {getAllPeople} = useTypedSelector(state => state.request.people);
    const {starships: starshipsCart, people: peopleCart} = useTypedSelector(state => state.app.cart);

    const {type} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isStarships = type === 'starships';
    useEffect(() => {
        if(!getAllPeople.data && !getAllStarships.data) {
            isStarships ? dispatch(starships.get()) : dispatch(people.get());
        }
        // saveCartFromLocalstorageToRedux();
    }, [])

    useEffect(() => {
        const err = isStarships ? getAllStarships.error : getAllPeople.error;
        if(err) {
            navigate(RouteNames.ERROR);
        }
    }, [getAllPeople.error, getAllStarships.error])

    useEffect(() => {
        util.saveCartToLocalstorage(peopleCart, starshipsCart)
    }, [starshipsCart, peopleCart])

    const changeView = (viewToChange: string) => {
        localStorage.setItem(LocalstorageKey.ProductsView, viewToChange);
        setNowView(viewToChange);
    }

    return (
        <>
            <main className={styles.wrapper}>
            <ProductInfoHeader setView={changeView} nowView={nowView}/>

                {getAllStarships.status === StateStatus.PENDING ||
                getAllPeople.status === StateStatus.PENDING ? <Spinner/> : null}

                {nowView === LocalstorageValue.ProductCardView ?
                    <ProductCardsView
                        test="test"
                        type={isStarships ? 'starships':'people'}
                        data={isStarships ? getAllStarships.data?.items : getAllPeople.data?.items}
                        images={isStarships ? starshipImages : peopleImages}
                    /> :
                    <ProductListView
                        type={isStarships ? 'starships':'people'}
                        data={isStarships ? getAllStarships.data?.items : getAllPeople.data?.items}
                        images={isStarships ? starshipImages : peopleImages}
                    />}
            </main>
        </>
    );
};

export default ProductInfoPage;