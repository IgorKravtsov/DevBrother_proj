import {initialState} from "./initialState";
import {UserAction, UserActionType, UserState} from "../../../types/_app/user";



export function reducer(state= initialState, action: UserActionType): UserState {
    switch (action.type) {

        case UserAction.SET_USER_DATA:
            return { ...state, userData: action.payload }

        default:
            return state
    }
}