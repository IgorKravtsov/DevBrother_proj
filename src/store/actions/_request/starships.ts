import {
    getStarshipsAllFailed,
    getStarshipsAllPending,
    getStarshipsAllSuccess,
    StarshipsAllAction
} from "../../../OLD DATA/_request/types/starships";
import {IStarshipResponse} from "../../../interfaces/swapi-response/IStarshipResponse";
import {AppDispatch} from "../../index";
import {StarshipService} from "../../../api/starship-service";

export const starships = {
    get:  () => async (dispatch: AppDispatch) => {
        try {
            dispatch(starships.getPending());
            const res = await StarshipService.getAllStarships();
            dispatch(starships.getSuccess(res.data));
        } catch (e: any) {
            dispatch(starships.getFailed("Произошла ошибка при загрузке данных"));
        }
    },

    getSuccess: (payload: IStarshipResponse): getStarshipsAllSuccess => ({
        type: StarshipsAllAction.GET_STARSHIPS_ALL_SUCCESS,
        payload
    }),
    getFailed: (payload: string): getStarshipsAllFailed => ({
        type: StarshipsAllAction.GET_STARSHIPS_ALL_FAILED,
        payload
    }),
    getPending: ():getStarshipsAllPending => ({
        type: StarshipsAllAction.GET_STARSHIPS_ALL_PENDING
    }),
}