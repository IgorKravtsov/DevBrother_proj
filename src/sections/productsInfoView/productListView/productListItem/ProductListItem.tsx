import React, {FC, useEffect, useState} from 'react';
import styles from './productListItem.module.scss';
import {ISwapiStarship} from "../../../../models/swapi-response/IStarshipResponse";
import {ISwapiPeople} from "../../../../models/swapi-response/IPeopleResponse";
import {IProductImage} from "../../../../pages/productInfoPage/assets/productImages";


export interface ProductListItemProps {
    product: ISwapiStarship | ISwapiPeople;
    image: IProductImage;
    type: 'starships' | 'people';
}

const ProductListItem:FC<ProductListItemProps> = ({product, image,type}) => {
    const [itemsPeople, setItemsPeople] = useState<ISwapiPeople>();
    const [itemsStarships, setItemsStarships] = useState<ISwapiStarship>();

    useEffect(() => {
        if(type === 'starships') {
            setItemsStarships(product as ISwapiStarship);
        } else if(type === 'people') {
            setItemsPeople(product as ISwapiPeople);
        }
    }, [])

    return (
        <div className={styles.wrapper}>
            <img className={styles.img} src={image.src} alt={image.alt}/>
            <div className={styles.text}>
                {type === 'starships' ?
                    itemsStarships &&
                    <>
                        <h3>MODEL: {itemsStarships?.model}</h3>
                        <h3>MANUFACTURER: {itemsStarships.manufacturer}</h3>
                        <h3>COST: {itemsStarships?.cost_in_credits} $</h3>
                    </> :
                    itemsPeople &&
                    <>
                        <h3>NAME: {itemsPeople.name}</h3>
                        <h3>GENDER: {itemsPeople?.gender}</h3>
                        <h3>BORN AT: {itemsPeople?.birth_year}</h3>
                    </>
                }
            </div>
        </div>
    );
};

export default ProductListItem;