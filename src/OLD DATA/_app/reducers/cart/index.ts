import {setUserData, UserAction, UserState} from "../../types/user";
import {UserDTO} from "../../../../interfaces/userDTO";

const initialState: UserState = {
    userData: {} as UserDTO,
}

export default function userReducer(state= initialState, action: UserAction): UserState {
    switch (action.type) {
        case setUserData:
            return { ...state, userData: action.payload }

        default:
            return state
    }
}