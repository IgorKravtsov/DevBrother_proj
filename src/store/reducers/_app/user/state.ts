import {RootState} from "../../../index";

export const state = {

    setUser: {
        userData: (state: RootState) => state.app.user.userData,
    }

}