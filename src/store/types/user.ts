import {UserDTO} from "../../models/userDTO";

export interface UserState {
    userData: UserDTO;
}

enum UserActionsEnum {
    SET_USER_DATA="SET_USER_DATA",
}

export interface SetUserDataAction {
    type: UserActionsEnum.SET_USER_DATA;
    payload: UserDTO;
}

export const setUserData = UserActionsEnum.SET_USER_DATA;


export type UserAction =
    SetUserDataAction;

