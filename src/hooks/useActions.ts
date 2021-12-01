import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {cartActionCreators, userActionCreators} from '../store/__app/actions';
import {swapiActionCreators, swapiNowItemActionCreators} from '../store/__request/actions';

export const useActions = () => {
    const actionCreatorsToBind = {
        ...userActionCreators,
        ...swapiActionCreators,
        ...cartActionCreators,
        ...swapiNowItemActionCreators,

    }
    const dispatch = useDispatch();
    return bindActionCreators(actionCreatorsToBind, dispatch);
}