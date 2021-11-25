import React, {useEffect} from 'react';
import styles from './productsPage.module.scss';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import TotalCountCard from "../../components/totalCountCard/TotalCountCard";

const ProductsPage = () => {

    const {getStarshipsData, getPeopleData} = useActions();
    const {people, starships} = useTypedSelector(state => state.swapiReducer);

    useEffect(() => {
        fetchAll();
    }, [])

    const fetchAll = () => {
        getStarshipsData();
        getPeopleData();
    }

    return (
        <>
            <header className={styles.title_wrapper}>
                <h2 className={styles.title}>CHOOSE STARWARS DATA YOU WANT</h2>
            </header>
            <main className={styles.wrapper}>
                <ul className={styles.cards}>
                    <li className={styles.cardListItem}><TotalCountCard path='/products/starships' title="Starships" totalCount={starships.totalCount} isLoading={starships.isLoading} /></li>
                    <li className={styles.cardListItem}><TotalCountCard path='/products/people' title="People" totalCount={people.totalCount} isLoading={people.isLoading} /></li>
                </ul>
            </main>
        </>
    );
};

export default ProductsPage;