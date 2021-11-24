import React, {FC, useState} from 'react';
import styles from "./productInfoHeader.module.scss";
import {LocalstorageValue} from "../../../types/LocalstorageValue";
import squareIcon from "./img/squareIcon.svg";
import burger from "./img/burger.svg";
import backArrow from "./img/backArrow.svg";
import {useNavigate} from "react-router-dom";

export interface ProductInfoHeaderProps {
    setView: Function;
    nowView: string;
}

const ProductInfoHeader:FC<ProductInfoHeaderProps> = ({setView, nowView}) => {
    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
    }

    return (
        <div className={styles.header}>
            <img src={backArrow} alt="BACK" onClick={back} className={styles.back}/>
            <div className={styles.changeViewBlock}>
                <img
                    onClick={() => setView(LocalstorageValue.ProductCardView)}
                    className={[styles.listSwitch, nowView === LocalstorageValue.ProductCardView ? styles.listSwitch_active : ''].join(' ')}
                    src={squareIcon}
                    alt="card"
                />
                <img
                    onClick={() => setView(LocalstorageValue.ProductListView)}
                    className={[styles.listSwitch, nowView === LocalstorageValue.ProductListView ? styles.listSwitch_active : ''].join(' ')}
                    src={burger}
                    alt="list"
                />
            </div>
        </div>
    );
};

export default ProductInfoHeader;