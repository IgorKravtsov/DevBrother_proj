import React, {FC, useState} from 'react';
import styles from './productListView.module.scss';
import {ISwapiPeople} from "../../../interfaces/swapi-response/IPeopleResponse";
import {ISwapiStarship} from "../../../interfaces/swapi-response/IStarshipResponse";
import ProductListItem from "./productListItem/ProductListItem";
import {IProductImage} from "../../../pages/assets/productImages";
import * as util from '../../../util';


export interface ProductListViewProps {
    data: ISwapiPeople[] | ISwapiStarship[];
    images: IProductImage[];
    type: 'starships' | 'people';
}

const ProductListView:FC<ProductListViewProps> = ({data,images, type}) => {

    return (
        <ul className={styles.wrapper}>
            {data.map((product,index) => <ProductListItem
                key={product.url}
                type={type}
                image={util.getImageByIndex(images, index)}
                product={product}/>)}
        </ul>
    );
};

export default ProductListView;