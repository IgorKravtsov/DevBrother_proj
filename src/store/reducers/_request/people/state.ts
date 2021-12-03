import {RootState} from "../../../index";

export const state = {

    getAllPeople: {
        data: (state: RootState) => state.request.people.getAllPeople.data,
        status: (state: RootState) => state.request.people.getAllPeople.status,
        error: (state: RootState) => state.request.people.getAllPeople.error,
    }

}