import React, {FC, ReactElement} from 'react';
import styles from './main.module.scss';
import CategoriesSection from "./categoriesSection/CategoriesSection";
import CardsSection from "./cardsSection/CardsSection";

export interface MainProps {

}

const Main:FC<MainProps> = (): ReactElement => {
    return (
        <main className={[styles.wrapper,  window.scrollY > 15 ? styles.wrapper_hidden : '' ].join(' ')}>
            <CategoriesSection />
            <CardsSection />
        </main>
    );
};

export default Main;