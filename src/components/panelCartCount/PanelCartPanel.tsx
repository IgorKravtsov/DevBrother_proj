import React, {FC} from 'react';
import styles from './panelCartCount.module.scss';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useSelector} from "react-redux";

export interface PanelCartPanelProps {
    isVisible: boolean
}

const PanelCartPanel:FC<PanelCartPanelProps> = ({isVisible}) => {
    const {people, starships} = useTypedSelector(state => state.app.cart);

    return (
        <ul className={[styles.wrapper, isVisible ? styles.wrapper_active : ''].join(' ')}>
            {<li><h5 className={styles.text}>STARSHIPS: {starships?.length || 0}</h5></li>}
            {<li><h5 className={styles.text}>PEOPLE: {people?.length || 0}</h5></li>}
        </ul>
    );
};

export default PanelCartPanel;