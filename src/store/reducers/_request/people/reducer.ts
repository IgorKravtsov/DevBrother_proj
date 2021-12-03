import {initialState} from "./initialState";
import {StateStatus} from "../../../../interfaces/StateStatus";
import {PeopleActionType, PeopleAllAction, PeopleState} from "../../../types/_request/people";



export function reducer(state= initialState, action: PeopleActionType): PeopleState {
    switch (action.type) {

        case PeopleAllAction.GET_PEOPLE_ALL_SUCCESS:
            return {...state,
                getAllPeople: { ...state.getAllPeople,
                    data: { ...state.getAllPeople.data, items: action.payload.results, count: action.payload.count },
                    status: StateStatus.SUCCESS, error: null } }

        case PeopleAllAction.GET_PEOPLE_ALL_PENDING:
            return {...state, getAllPeople: { ...state.getAllPeople, status: StateStatus.PENDING } }

        case PeopleAllAction.GET_PEOPLE_ALL_FAILED:
            return {...state, getAllPeople: { ...state.getAllPeople, error: action.payload, status: StateStatus.FAILED } }

        default:
            return state
    }
}