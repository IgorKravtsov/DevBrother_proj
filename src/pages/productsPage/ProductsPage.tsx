import React, {useEffect, useState} from 'react';
import styles from './productsPage.module.scss';
import {useActions} from "../../hooks/useActions";
import {IStarshipResponse} from "../../models/swapi-response/IStarshipResponse";
import {IPeopleResponse} from "../../models/swapi-response/IPeopleResponse";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Button from "../../components/button/Button";
import TotalCountCard from "../../components/totalCountCard/TotalCountCard";

const ProductsPage = () => {
    // const [starships, setStarships] = useState<IStarshipResponse>();
    // const [people, setPeople] = useState<IPeopleResponse>();

    const {fetchSwapiStarshipsData, fetchSwapiPeopleData} = useActions();
    const {people, starships} = useTypedSelector(state => state.swapiReducer);

    useEffect(() => {
        console.log(people, starships)
    }, [people, starships])

    useEffect(() => {
        fetchAll();
    }, [])

    const fetchAll = () => {
        fetchSwapiStarshipsData();
        fetchSwapiPeopleData();
    }

    return (
        <main className={styles.wrapper}>
            <h1 className={styles.title}>CHOOSE STARWARS DATA YOU WANT</h1>
            <div className={styles.cards}>
                <TotalCountCard path='/products/starships' title="Starships" totalCount={starships.totalCount} isLoading={starships.isLoading} />
                <TotalCountCard path='/products/people' title="People" totalCount={people.totalCount} isLoading={people.isLoading} />
            </div>
        </main>
    );
};

export default ProductsPage;