import React, {FC} from 'react';
import styles from './productCardsView.module.scss';
import {ISwapiPeople} from "../../../models/swapi-response/IPeopleResponse";
import {ISwapiStarship} from "../../../models/swapi-response/IStarshipResponse";
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
        <div className={styles.wrapper}>
            {data.map(product => <ProductCardsItem type={type} image={util.getRandomImage(images)}  product={product}/>)}
        </div>
    );
};

export default ProductCardsView;