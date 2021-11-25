import React, {FC, useEffect, useState} from 'react';
import styles from './productListItem.module.scss';
import {ISwapiStarship} from "../../../../interfaces/swapi-response/IStarshipResponse";
import {ISwapiPeople} from "../../../../interfaces/swapi-response/IPeopleResponse";
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
        <li className={styles.wrapper}>
            <p className={styles.img_wrapper}><img className={styles.img} src={image.src} alt={image.alt}/></p>
            <ul className={styles.text}>
                {type === 'starships' ?
                    itemsStarships &&
                    <>
                        <li><h2 className={styles.title}>{itemsStarships?.model}</h2></li>
                        <li><p>MANUFACTURER: {itemsStarships.manufacturer}</p></li>
                        <li><p>COST: {itemsStarships?.cost_in_credits} $</p></li>
                    </> :
                    itemsPeople &&
                    <>
                        <li><h2 className={styles.title}>{itemsPeople.name}</h2></li>
                        <li><p>GENDER: {itemsPeople?.gender}</p></li>
                        <li><p>BORN AT: {itemsPeople?.birth_year}</p></li>
                    </>
                }
            </ul>
        </li>
    );
};

export default ProductListItem;