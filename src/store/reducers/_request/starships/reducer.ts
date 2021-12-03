import {initialState} from "./initialState";
import {StateStatus} from "../../../../interfaces/StateStatus";
import {StarshipsActionType, StarshipsAllAction, StarshipsState} from "../../../types/_request/starships";



export function reducer(state= initialState, action: StarshipsActionType): StarshipsState {
    switch (action.type) {

        case StarshipsAllAction.GET_STARSHIPS_ALL_SUCCESS:
            return {...state,
                getAllStarships: { ...state.getAllStarships,
                    data: { ...state.getAllStarships.data, items: action.payload.results, count: action.payload.count },
                    status: StateStatus.SUCCESS, error: null } }

        case StarshipsAllAction.GET_STARSHIPS_ALL_PENDING:
            return {...state, getAllStarships: { ...state.getAllStarships, status: StateStatus.PENDING } }

        case StarshipsAllAction.GET_STARSHIPS_ALL_FAILED:
            return {...state, getAllStarships: { ...state.getAllStarships, error: action.payload, status: StateStatus.FAILED } }

        default:
            return state
    }
}