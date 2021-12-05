import React, {useEffect} from 'react';
import styles from './productsPage.module.scss';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import TotalCountCard from "../../components/totalCountCard/TotalCountCard";
import {LocalstorageKey} from "../../types/LocalstorageKey";
import {StateStatus} from "../../interfaces/StateStatus";
import {starships} from "../../store/actions/_request/starships";
import {people} from "../../store/actions/_request/people";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useDispatch} from "react-redux";

const ProductsPage = () => {

    // const {getStarshipsData, getPeopleData} = useActions();
    // const {people, starships} = useTypedSelector(state => state.swapiReducer);
    const {getAllStarships} = useTypedSelector(state => state.request.starships);
    const {getAllPeople} = useTypedSelector(state => state.request.people);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchAll();
    }, [])

    const fetchAll = () => {
        dispatch(starships.get());
        dispatch(people.get());
        // getStarshipsData();
        // getPeopleData();
    }

    return (
        <>
            <main className={styles.wrapper}>
                <div className={styles.title_wrapper}>
                    <h2 className={styles.title}>CHOOSE STARWARS DATA YOU WANT</h2>
                </div>
                <ul className={styles.cards}>
                    <li className={styles.cardListItem}>
                        <TotalCountCard
                            path='/products/starships'
                            title="Starships"
                            totalCount={getAllStarships.data?.count}
                            isLoading={getAllStarships.status === StateStatus.PENDING}
                            error={getAllStarships.error!}
                        />
                    </li>
                    <li className={styles.cardListItem}>
                        <TotalCountCard
                            path='/products/people'
                            title="People"
                            totalCount={getAllPeople.data?.count}
                            isLoading={getAllPeople.status === StateStatus.PENDING}
                            error={getAllPeople.error!}
                        />
                    </li>
                </ul>
            </main>
        </>
    );
};

export default ProductsPage;