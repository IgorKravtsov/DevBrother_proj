import {RootState} from "../../../index";

export const state = {

    getOnePerson: {
        data: (state: RootState) => state.request.nowStarship.getOneStarship.data,
        status: (state: RootState) => state.request.nowStarship.getOneStarship.status,
        error: (state: RootState) => state.request.nowStarship.getOneStarship.error,
    }

}