import React, {FC, useState} from 'react';
import styles from './productListView.module.scss';
import {ISwapiPeople} from "../../../models/swapi-response/IPeopleResponse";
import {ISwapiStarship} from "../../../models/swapi-response/IStarshipResponse";
import ProductListItem from "./productListItem/ProductListItem";
import {IProductImage} from "../../../pages/productInfoPage/assets/productImages";
import * as util from '../../../util/util';


export interface ProductListViewProps {
    data: ISwapiPeople[] | ISwapiStarship[];
    images: IProductImage[];
    type: 'starships' | 'people';
}

const ProductListView:FC<ProductListViewProps> = ({data,images, type}) => {

    return (
        <div className={styles.wrapper}>
            {data.map(product => <ProductListItem type={type} image={util.getRandomImage(images)}  product={product}/>)}
        </div>
    );
};

export default ProductListView;