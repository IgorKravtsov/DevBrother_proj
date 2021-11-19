import {UserDTO} from "../../../models/userDTO";
import {SetUserDataAction, UserActionsEnum} from "./types";


export const userActionCreators = {

    setUserData: (payload: UserDTO ): SetUserDataAction => {
        localStorage.setItem("userData", JSON.stringify(payload));
            return {
                  type: UserActionsEnum.SET_USER_DATA,
                  payload
            }
    },

}