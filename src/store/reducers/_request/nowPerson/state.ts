import {RootState} from "../../../index";

export const state = {

    getOnePerson: {
        data: (state: RootState) => state.request.nowPerson.getOnePerson.data,
        status: (state: RootState) => state.request.nowPerson.getOnePerson.status,
        error: (state: RootState) => state.request.nowPerson.getOnePerson.error,
    }

}