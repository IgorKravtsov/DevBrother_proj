import React, {FC, ReactElement, useEffect} from 'react';
import styles from './productCardsItem.module.scss';
import {ISwapiStarship} from "../../../../interfaces/swapi-response/IStarshipResponse";
import {ISwapiPeople} from "../../../../interfaces/swapi-response/IPeopleResponse";
import {IProductImage} from "../../../../pages/assets/productImages";
import {useSwapiTypeState} from "../../../../hooks/useSwapiTypeState";
import ProductCard from "../../../../components/productCard/ProductCard";
import Button from "../../../../components/button/Button";
import {useActions} from "../../../../hooks/useActions";
import {Link} from "react-router-dom";
import * as util from '../../../../util';
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {getId} from "../../../../util/getId";

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
    const {addToCartStarship, addToCartPeople} = useActions();
    // const {starships, people} = useTypedSelector(state => state.cartReducer);

    const isStarships = type === 'starships';
    const id = util.getId(product);


    // useEffect(() => {
    //     // return () => {
    //         util.saveCartToLocalstorage(people, starships)
    //     // }
    // }, [starships, people])
    // console.log(product.url);


    return (
        <li className={styles.listItem}>
            <Link  className={styles.link}
                   to={`/products/${type}/${id}`}
                   // to={location => `${location.pathname}?sort=name`}
            />
            {isStarships ?
                <>
                    <ProductCard image={image} classes={styles.card} type={type}>
                        <h3 className={styles.text}>MODEL: {item.starships?.model}</h3>
                    </ProductCard>
                    {/*<Button outlineBtn onClick={() => addToCartStarship(item.starships)} classes={styles.btn}>ADD</Button>*/}
                </> :
                <>
                    <ProductCard image={image} classes={styles.card} type={type}>
                        <h3 className={styles.text}>NAME: {item.people?.name}</h3>
                    </ProductCard>
                </>}
            <Button outlineBtn
                    onClick={() => isStarships ?
                        addToCartStarship(item.starships) : addToCartPeople(item.people)}
                    classes={styles.btn}>ADD</Button>
        </li>
    );
};

export default ProductCardsItem;