import React, {FC} from 'react';
import styles from './productCardsView.module.scss';
import {ISwapiPeople} from "../../../interfaces/swapi-response/IPeopleResponse";
import {ISwapiStarship} from "../../../interfaces/swapi-response/IStarshipResponse";
import {IProductImage} from "../../../pages/productInfoPage/assets/productImages";
import * as util from '../../../util/util';
import ProductCardsItem from "./productCardsItem/ProductCardsItem";

export interface ProductCardsViewProps {
    data: ISwapiPeople[] | ISwapiStarship[];
    images: IProductImage[];
    type: 'starships' | 'people';
}

const ProductCardsView:FC<ProductCardsViewProps> = ({data, images, type}) => {
    return (
        <ul className={styles.wrapper}>
            {data.map(product => <ProductCardsItem key={product.url} type={type} image={util.getRandomImage(images)}  product={product}/>)}
        </ul>
    );
};

export default ProductCardsView;