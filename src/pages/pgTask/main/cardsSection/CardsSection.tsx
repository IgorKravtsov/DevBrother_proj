import React, {FC, ReactElement} from 'react';
// import { SpringGrid, CSSGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';
import StackGrid from "react-stack-grid";

import styles from './cardsSection.module.scss';
import {cards} from "./cards";
import Card from "./card/Card";



export interface CardsSectionProps {

}

// const Grid = makeResponsive(measureItems(CSSGrid), {
//     maxWidth: 568,
//     minPadding: 10
//   });


const CardsSection:FC<CardsSectionProps> = (): ReactElement => {

    // const {pinterest } = layout

    return (
        <section className="cards">
            <StackGrid
                columnWidth="40%"
                component="ul"
                itemComponent="li"
                gutterWidth={10}
                className={styles.wrapper}
            >
                {/*<li>*/}
                {/*    <Card card={{*/}
                {/*        name: 'name1',*/}
                {/*        categories: ['category1'],*/}
                {/*        img: util.getImageByIndex(peopleImages, 0),*/}

                {/*    }} />*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Card card={{*/}
                {/*        name: 'name1',*/}
                {/*        categories: ['category1', "category2", "category3"],*/}
                {/*        img: util.getImageByIndex(peopleImages, 0),*/}

                {/*    }} />*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Card card={{*/}
                {/*        name: 'name1',*/}
                {/*        categories: ['category1', "category2", "category3"],*/}
                {/*        img: util.getImageByIndex(peopleImages, 0),*/}

                {/*    }} />*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Card card={{*/}
                {/*        name: 'name1',*/}
                {/*        categories: ['category1', "category2", "category3"],*/}
                {/*        img: util.getImageByIndex(peopleImages, 0),*/}

                {/*    }} />*/}
                {/*</li>*/}

                 {/*<ul className={styles.wrapper}> */}
                    {cards.map((card, index) =>
                        <Card key={card.id} card={card} />
                    )}
                 {/*</ul> */}
            </StackGrid
            >
        </section>
    );
};

export default CardsSection;