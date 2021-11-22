import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {userActionCreators} from '../store/actions';

export const useActions = () => {
    const actionCreatorsToBind = {
        ...userActionCreators
    }
    const dispatch = useDispatch();
    return bindActionCreators(actionCreatorsToBind, dispatch);
}