import {initialState} from "./initialState";
import {StateStatus} from "../../../../interfaces/StateStatus";
import {OneStarshipAction, OneStarshipActionType, OneStarshipState} from "../../../types/_request/nowStarship";



export function reducer(state= initialState, action: OneStarshipActionType): OneStarshipState {
    switch (action.type) {

        case OneStarshipAction.GET_ONE_STARSHIP_SUCCESS:
            return {...state,
                getOneStarship: { ...state.getOneStarship, data: action.payload, status: StateStatus.SUCCESS, error: null } }

        case OneStarshipAction.GET_ONE_STARSHIP_PENDING:
            return {...state, getOneStarship: { ...state.getOneStarship, status: StateStatus.PENDING } }

        case OneStarshipAction.GET_ONE_STARSHIP_FAILED:
            return {...state, getOneStarship: { ...state.getOneStarship, error: action.payload, status: StateStatus.FAILED } }

        default:
            return state
    }
}