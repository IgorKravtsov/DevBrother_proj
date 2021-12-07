import React, {FC, memo} from 'react';
import CartHeader from "./header/CartHeader";
import styles from './cartSection.module.scss';
import CartBox from "./box/CartBox";

export interface CartSectionProps {
    closeFunc: Function;
}

const CartSection:FC<CartSectionProps> = memo(({closeFunc}) => {
    return (
        <div className={styles.container}>
            <CartHeader closeFunc={closeFunc}/>
            <CartBox/>
        </div>
    );
});

export default CartSection;