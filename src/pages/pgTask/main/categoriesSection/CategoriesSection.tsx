import React, {FC, ReactElement} from 'react';
import styles from './categoriesSection.module.scss';
import {categories} from './categories';

export interface CategoriesSectionProps {

}

const CategoriesSection:FC<CategoriesSectionProps> = (): ReactElement => {
    return (
        <section className="categories">
            <ul className={styles.wrapper}>
                {categories.map((category,index) =>
                    <li key={Date.now() + index} className={styles.list_item}>
                        {category}
                    </li>
                )}
            </ul>
        </section>
    );
};

export default CategoriesSection;