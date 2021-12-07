import React, {FC, memo, ReactElement, useCallback, useEffect, useState} from 'react';
import styles from './cartBox.module.scss';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import * as util from '../../../util';
import {LocalstorageKey} from "../../../types/LocalstorageKey";
import {ISwapiStarship} from "../../../interfaces/swapi-response/IStarshipResponse";
import {ISwapiPeople} from "../../../interfaces/swapi-response/IPeopleResponse";
import {ProductInCart} from "../../../interfaces/ProductInCart";
import CartList from "./cartList/CartList";

export interface CartBoxProps {

}

const CartBox:FC<CartBoxProps> = () => {

    const {people: cartPeople, starships: cartStarships} = useTypedSelector(state => state.cart);
    const [mapPeople, setMapPeople] = useState<Map<string, number>>();
    const [mapStarships, setMapStarships] = useState<Map<string, number>>();

    useEffect(() => {

        const [mapStarships, mapPeople] = util.parseLocalstorageToMakeCart(cartStarships, cartPeople);
        setMapPeople(mapPeople);
        setMapStarships(mapStarships);

    }, [cartStarships, cartPeople])


    const getRenderArrays = (mapItem: Map<string, number>, cartItem: ISwapiPeople[] | ISwapiStarship[]): ProductInCart[] => {
        const res: ProductInCart[] = [];
        if(mapItem?.size) {
            mapItem.forEach((value, key) => {
                // @ts-ignore
                const elem = cartItem.find(person => person.name === key);
                elem && res.push({product: elem, count: value});
            })
        }
        return res;
    }

    const getCartItems = useCallback((): ProductInCart[][] => {

        const renderPeople = mapPeople && getRenderArrays(mapPeople, cartPeople);
        const renderStarships = mapStarships && getRenderArrays(mapStarships, cartStarships);

        return [renderPeople || [], renderStarships || []];
    }, [mapPeople, mapStarships]);

    console.log('sssguyuyu')

    return (
        <CartList getCartItems={getCartItems}/>
    );
};

export default CartBox;