import React, {FC} from 'react';
import styles from './productCardsView.module.scss';
import {ISwapiPeople} from "../../../interfaces/swapi-response/IPeopleResponse";
import {ISwapiStarship} from "../../../interfaces/swapi-response/IStarshipResponse";
import {IProductImage} from "../../../pages/assets/productImages";
import * as util from '../../../util';
import ProductCardsItem from "./productCardsItem/ProductCardsItem";

export interface ProductCardsViewProps {
    data: ISwapiPeople[] | ISwapiStarship[];
    images: IProductImage[];
    type: 'starships' | 'people';
    test: string;
}

const ProductCardsView:FC<ProductCardsViewProps> = (
    {
        data,
        type,
        images}) => {


    return (
        <ul className={styles.wrapper}>
            {data.map((product, index) => <ProductCardsItem
                key={product.url} 
                type={type} 
                image={util.getImageByIndex(images, index)}
                product={product}
            />)}
        </ul>
    );
};

export default ProductCardsView;