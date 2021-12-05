import React, {FC, ReactElement, useEffect} from 'react';
import styles from './productItemPage.module.scss';
import * as util from "../../util";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {useParams} from "react-router-dom";
import StarshipsItemMainSection from "../../sections/nowItemMainSection/starshipsItemMainSection/StarshipsItemMainSection";
import {peopleImages, starshipImages} from "../assets/productImages";
import ProductItemMainSection from "../../sections/nowItemMainSection/productItemMainSection/ProductItemMainSection";
import Spinner from "../../components/spinner/Spinner";
import {nowPerson} from "../../store/actions/_request/nowPerson";
import {StateStatus} from "../../interfaces/StateStatus";
import {nowStarship} from "../../store/actions/_request/nowStarship";
import {useDispatch} from "react-redux";
import {useAppDispatch} from "../../hooks/useAppDispatch";

export interface ProductItemPageProps {

}

const ProductItemPage:FC<ProductItemPageProps> = (): ReactElement => {

    // const {nowPerson, nowStarship} = useTypedSelector(state => state.swapiNowItemReducer);
    const {getOneStarship} = useTypedSelector(state => state.request.nowStarship);
    const {getOnePerson} = useTypedSelector(state => state.request.nowPerson);
    const dispatch = useDispatch();
    // const {getNowPersonItem, getNowStarshipItem} = useActions();
    const {id, type} = useParams();
    const isStarships = type === 'starships';

    useEffect(() => {
        if(isStarships) {
            id && dispatch(nowStarship.get(parseInt(id)))
        } else {
            id && dispatch(nowPerson.get(parseInt(id)));
        }
    }, [])


    return (
        <main className={styles.wrapper}>
            {getOnePerson.status === StateStatus.PENDING ||
            getOneStarship.status === StateStatus.PENDING ? <Spinner/> :
                <ProductItemMainSection
                    img={util.getRandomImage(isStarships ? starshipImages : peopleImages)}
                    data={isStarships ? getOneStarship.data! : getOnePerson.data!}
                />}
        </main>
    );
};

export default ProductItemPage;