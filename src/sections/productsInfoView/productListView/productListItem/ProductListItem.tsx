import React, {FC, useEffect, useState} from 'react';
import styles from './productListItem.module.scss';
import {ISwapiStarship} from "../../../../interfaces/swapi-response/IStarshipResponse";
import {ISwapiPeople} from "../../../../interfaces/swapi-response/IPeopleResponse";
import {IProductImage} from "../../../../pages/assets/productImages";
import {Link} from "react-router-dom";
import Button from "../../../../components/button/Button";
import * as util from "../../../../util";
import {addStarshipToCart, addPersonToCart} from '../../../../store/slices/cartSlice';
import {useDispatch} from "react-redux";


export interface ProductListItemProps {
    product: ISwapiStarship | ISwapiPeople;
    image: IProductImage;
    type: 'starships' | 'people';
}

const ProductListItem:FC<ProductListItemProps> = ({product, image,type}) => {
    const [itemPeople, setItemPeople] = useState<ISwapiPeople>();
    const [itemStarships, setItemStarships] = useState<ISwapiStarship>();

    const isStarships = type === 'starships';
    const id = util.getId(product);
    const dispatch = useDispatch();

    useEffect(() => {
        if(type === 'starships') {
            setItemStarships(product as ISwapiStarship);
        } else if(type === 'people') {
            setItemPeople(product as ISwapiPeople);
        }

    }, [])

    const addToCart = () => {
            isStarships ? itemStarships && dispatch(addStarshipToCart(itemStarships)) :
                itemPeople && dispatch(addPersonToCart(itemPeople));
    }

    return (
        <li className={styles.wrapper}>
            <Link className={styles.link} to={`/products/${type}/${id}`}/>
            <p className={styles.img_wrapper}><img className={styles.img} src={image.src} alt={image.alt}/></p>
            <ul className={styles.text}>
                {isStarships ?
                    itemStarships &&
                    <>
                        <li><h2 className={styles.title}>{itemStarships?.model}</h2></li>
                        <li><p>MANUFACTURER: {itemStarships.manufacturer}</p></li>
                        <li><p>COST: {itemStarships?.cost_in_credits} $</p></li>
                    </> :
                    itemPeople &&
                    <>
                        <li><h2 className={styles.title}>{itemPeople.created}</h2></li>
                        <li><p>GENDER: {itemPeople?.gender}</p></li>
                        <li><p>BORN AT: {itemPeople?.birth_year}</p></li>
                    </>
                }
            </ul>
            <Button onClick={addToCart} outlineBtn classes={styles.btn}>ADD</Button>
        </li>
    );
};

export default ProductListItem;