import {UserDTO} from "../../interfaces/userDTO";
import {setUserData, SetUserDataAction} from "../types/user";

export const userActionCreators = {

    setUserData: (payload: UserDTO ): SetUserDataAction => {
            localStorage.setItem("userData", JSON.stringify(payload));
            return {
                type: setUserData,
                payload
            }
    },

}