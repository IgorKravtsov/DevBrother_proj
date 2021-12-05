import {initialState} from "./initialState";
import {StateStatus} from "../../../../interfaces/StateStatus";
import {OnePersonAction, OnePersonActionType, OnePersonState} from "../../../types/_request/nowPerson";



export function reducer(state= initialState, action: OnePersonActionType): OnePersonState {
    switch (action.type) {

        case OnePersonAction.GET_ONE_PERSON_SUCCESS:
            return {...state,
                getOnePerson: { ...state.getOnePerson, data: action.payload, status: StateStatus.SUCCESS, error: null } }

        case OnePersonAction.GET_ONE_PERSON_PENDING:
            return {...state, getOnePerson: { ...state.getOnePerson, status: StateStatus.PENDING } }

        case OnePersonAction.GET_ONE_PERSON_FAILED:
            return {...state, getOnePerson: { ...state.getOnePerson, error: action.payload, status: StateStatus.FAILED } }

        default:
            return state
    }
}