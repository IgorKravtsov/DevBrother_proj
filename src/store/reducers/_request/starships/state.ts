import {RootState} from "../../../index";

export const state = {

    getAllStarships: {
        data: (state: RootState) => state.request.starships.getAllStarships.data,
        status: (state: RootState) => state.request.starships.getAllStarships.status,
        error: (state: RootState) => state.request.starships.getAllStarships.error,
    }

}