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
        <div>
            <Link className={styles.link} to={path}>
                <div className={styles.card}>
                    {isLoading ?
                        <Spinner classes={styles.spinner}/> :
                        <div className={styles.text_wrapper}>
                            <h3 className={styles.title}>{title}</h3>
                            <h2 className={styles.count}>{totalCount}</h2>
                        </div>
                    }
                </div>
            </Link>
        </div>
    );
};


export default TotalCountCard;