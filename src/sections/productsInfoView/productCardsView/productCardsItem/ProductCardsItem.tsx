import React, {FC, ReactElement, useEffect, useState} from 'react';
import styles from './productCardsItem.module.scss';
import {ISwapiStarship} from "../../../../interfaces/swapi-response/IStarshipResponse";
import {ISwapiPeople} from "../../../../interfaces/swapi-response/IPeopleResponse";
import {IProductImage} from "../../../../pages/productInfoPage/assets/productImages";
import {useSwapiTypeState} from "../../../../hooks/useSwapiTypeState";
import ProductCard from "../../../../components/productCard/ProductCard";

export interface ProductCardsItemProps {
    product: ISwapiStarship | ISwapiPeople;
    image: IProductImage;
    type: 'starships' | 'people';
}

const ProductCardsItem:FC<ProductCardsItemProps> = (
    {
        product,
        image,
        type
    }): ReactElement => {

    const item = useSwapiTypeState(type, product);

    return (
        <li className={styles.listItem}>
            {type === 'starships' ?
                <ProductCard image={image}>
                    <h3 className={styles.text}>MODEL: {item.starships?.model}</h3>
                </ProductCard> :
                <ProductCard image={image}>
                    <h3 className={styles.text}>NAME: {item.people?.name}</h3>
                </ProductCard>}
        </li>
    );
};

export default ProductCardsItem;