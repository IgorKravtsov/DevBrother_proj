import React, {FC, memo, useEffect, useMemo, useState} from 'react';
import styles from './cartItem.module.scss';
import {ProductInCart} from "../../../../../interfaces/ProductInCart";
import {IProductImage, peopleImages} from "../../../../../pages/assets/productImages";
import {useDispatch} from "react-redux";
import * as util from "../../../../../util";

export interface CartItemProps {
    cartProduct: ProductInCart;
    image?: IProductImage;
    minusFunc: Function;
    plusFunc: Function;
    deleteAllFunc: Function;
}

const CartItem:FC<CartItemProps> = (
    {
        cartProduct,
        image,
        minusFunc,
        deleteAllFunc,
        plusFunc,
    }
) => {
    const dispatch = useDispatch();
    const [visiblePanel, setVisiblePanel] = useState(false)

    const img = useMemo(() => {
        return util.getRandomImage(peopleImages);
    }, [])

    // const img = util.getRandomImage(peopleImages);
    return (
        <li className={styles.wrapper}
            onMouseOver={() => setVisiblePanel(true)}
            onMouseLeave={() => setVisiblePanel(false)}
        >
            <div className={styles.panel_wrapper}>
                <p className={styles.img_wrapper_}><img className={styles.img} src={img.src} alt={img.alt}/></p>
                <p className={styles.count}>{cartProduct.count}</p>
                <div className={[styles.panel, visiblePanel ? styles.panel_visible : ''].join(' ')}>
                    <button onClick={() => dispatch(deleteAllFunc(cartProduct.product))} className={styles.deleteAll}>x</button>
                    <button onClick={() => dispatch(minusFunc(cartProduct.product))} className={styles.count_elem}>-</button>
                    <button onClick={() => dispatch(plusFunc(cartProduct.product))} className={styles.count_elem}>+</button>
                </div>
            </div>
            <ul className={styles.list}>
                <li><p className={styles.text}>Name: {cartProduct.product.name}</p></li>
                <li><p className={styles.text}>URL: {cartProduct.product.url}</p></li>
            </ul>
        </li>
    );
}

export default CartItem;