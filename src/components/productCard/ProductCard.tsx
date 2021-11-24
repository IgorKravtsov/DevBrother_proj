import React, {FC, ReactElement} from 'react';
import styles from './productCard.module.scss';
import {IProductImage} from "../../pages/productInfoPage/assets/productImages";

export interface ProductCardProps {
    image: IProductImage;
}

const ProductCard:FC<ProductCardProps> = (
    {
        image,
        children,
    }): ReactElement => {
    return (
        <div className={styles.card}>
            <img className={styles.img} src={image.src} alt={image.alt}/>
                {children}
        </div>
    );
};

export default ProductCard;