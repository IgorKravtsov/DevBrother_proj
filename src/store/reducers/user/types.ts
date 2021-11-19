import {UserDTO} from "../../../models/userDTO";

export interface UserState {
    userData: UserDTO;
}

export enum UserActionsEnum {
    // SET_NAME="SET_NAME",
    // SET_PASSWORD="SET_PASSWORD",
    SET_USER_DATA="SET_USER_DATA",
}

export interface SetUserDataAction {
    type: UserActionsEnum.SET_USER_DATA;
    payload: UserDTO;
}

// export interface SetNameAction {
//     type: UserActionsEnum.SET_NAME;
//     payload: string;
// }
//
// export interface SetPasswordAction {
//     type: UserActionsEnum.SET_PASSWORD;
//     payload: string;
// }

export type UserAction =
    SetUserDataAction;

