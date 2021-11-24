import React, {FC, ReactElement, useEffect, useState} from 'react';
import styles from './productCardsItem.module.scss';
import {ISwapiStarship} from "../../../../models/swapi-response/IStarshipResponse";
import {ISwapiPeople} from "../../../../models/swapi-response/IPeopleResponse";
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
    // const [itemsPeople, setItemsPeople] = useState<ISwapiPeople>();
    // const [itemsStarships, setItemsStarships] = useState<ISwapiStarship>();
    //
    // useEffect(() => {
    //     if(type === 'starships') {
    //         setItemsStarships(product as ISwapiStarship);
    //     } else if(type === 'people') {
    //         setItemsPeople(product as ISwapiPeople);
    //     }
    // }, [])
    const items = useSwapiTypeState(type, product);

    return (
        <div className={styles.wrapper}>
            {type === 'starships' ?
                <ProductCard image={image}>
                    <h3 className={styles.text}>MODEL: {items.starships?.model}</h3>
                </ProductCard> :
                <ProductCard image={image}>
                    <h3 className={styles.text}>NAME: {items.people?.name}</h3>
                </ProductCard>
            }
        </div>
    );
};

export default ProductCardsItem;