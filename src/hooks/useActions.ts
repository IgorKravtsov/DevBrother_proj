import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {swapiActionCreators, userActionCreators} from '../store/actions';

export const useActions = () => {
    const actionCreatorsToBind = {
        ...userActionCreators,
        ...swapiActionCreators,
    }
    const dispatch = useDispatch();
    return bindActionCreators(actionCreatorsToBind, dispatch);
}