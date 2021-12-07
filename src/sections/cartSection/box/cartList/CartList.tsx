import React, {FC, memo, ReactElement, useEffect, useMemo} from 'react';
import styles from './cartList.module.scss';
import {ProductInCart} from "../../../../interfaces/ProductInCart";
import CartItem from "./cartItem/CartItem";
import * as util from '../../../../util';
import {peopleImages, starshipImages} from "../../../../pages/assets/productImages";
import {
    deleteAllTheseStarshipsFromCart,
    deleteAllThesePeopleFromCart,
    minusStarshipFromCart,
    minusPersonFromCart,
    addStarshipToCart,
    addPersonToCart} from '../../../../store/slices/cartSlice';

export interface CartListProps {
    getCartItems: () => ProductInCart[][];
}

const CartList:FC<CartListProps> = (
    {
        getCartItems,

    }
): ReactElement => {
    const [renderPeople, renderStarships] = getCartItems();

    const isRenderPeople = renderPeople.length > 0;
    const isRenderStarships = renderStarships.length > 0;

    const memoPeopleImage = useMemo(() => {
        console.log('sss')
        return util.getRandomImage(peopleImages);
    }, [])

    const memoStarshipsImages = useMemo(() => {
        return starshipImages;
    }, [])

    return (
        <>
            {isRenderPeople && <h3 className={styles.title}>PEOPLE</h3>}
            {isRenderPeople && renderPeople.map(person =>
                <ul key={person.product.name} className={styles.list}>
                    <CartItem
                        image={memoPeopleImage}
                        cartProduct={person}
                        minusFunc={minusPersonFromCart}
                        plusFunc={addPersonToCart}
                        deleteAllFunc={deleteAllThesePeopleFromCart}
                    />
                </ul>)}
            {isRenderStarships && <h3 className={styles.title}>STARSHIPS</h3>}
            {renderStarships.length > 0 && renderStarships.map(starship =>
                <ul key={starship.product.name} className={styles.list}>
                    <CartItem
                        image={util.getRandomImage(memoStarshipsImages)}
                        cartProduct={starship}
                        minusFunc={minusStarshipFromCart}
                        plusFunc={addStarshipToCart}
                        deleteAllFunc={deleteAllTheseStarshipsFromCart}
                    />
                </ul>)}
        </>
    );
};

export default memo(CartList);