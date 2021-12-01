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

export interface ProductItemPageProps {

}

const ProductItemPage:FC<ProductItemPageProps> = (): ReactElement => {

    const {nowPerson, nowStarship} = useTypedSelector(state => state.swapiNowItemReducer);
    const {getNowPersonItem, getNowStarshipItem} = useActions();
    const {id, type} = useParams();
    const isStarships = type === 'starships';

    useEffect(() => {
        if(isStarships) {
            id && getNowStarshipItem(parseInt(id))
        } else {
            id && getNowPersonItem(parseInt(id));
        }
    }, [])


    return (
        <main className={styles.wrapper}>
            {nowPerson.isLoading || nowStarship.isLoading ? <Spinner/> :
                <ProductItemMainSection
                    img={util.getRandomImage(isStarships ? starshipImages : peopleImages)}
                    data={isStarships ? nowStarship.data : nowPerson.data}
                />}
        </main>
    );
};

export default ProductItemPage;