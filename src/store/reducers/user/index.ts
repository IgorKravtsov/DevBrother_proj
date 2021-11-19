import {UserAction, UserActionsEnum, UserState} from "./types";
import {UserDTO} from "../../../models/userDTO";


const initialState: UserState = {
    userData: {} as UserDTO,
}

export default function userReducer(state= initialState, action: UserAction): UserState {
    switch (action.type) {
        case UserActionsEnum.SET_USER_DATA:
            return { ...state, userData: action.payload }

        default:
            return state
    }
}