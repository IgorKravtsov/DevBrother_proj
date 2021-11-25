import React, {FC} from 'react';
import {Link} from "react-router-dom";
import Spinner from "../spinner/Spinner";
import styles from './totalCountCard.module.scss';

export interface ProductCardProps {
    isLoading?: boolean;
    totalCount: number;
    title: string;
    path: string;
}

const TotalCountCard:FC<ProductCardProps> = (
    {
        isLoading=false,
        totalCount,
        title,
        path
    }
) => {
    return (
        <>
            <Link className={[styles.link, isLoading ? styles.link_disabled : ''].join(' ')} to={path}/>
            <div className={styles.cardList}>
                {isLoading ?
                    <Spinner classes={styles.spinner}/> :
                    <>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.count}>{totalCount}</p>
                    </>
                }
            </div>
        </>
    );
};


export default TotalCountCard;