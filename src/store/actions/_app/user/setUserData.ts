import {UserDTO} from "../../../../interfaces/userDTO";
import {SetUserDataAction, UserAction} from "../../../types/_app/user";
import {LocalstorageKey} from "../../../../types/LocalstorageKey";


export const setUserData = (payload: UserDTO ): SetUserDataAction => {
    localStorage.setItem(LocalstorageKey.User, JSON.stringify(payload));
    return {
        type: UserAction.SET_USER_DATA,
        payload
    }
}