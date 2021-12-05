import {AppDispatch} from "../../index";
import {
    getOneStarshipFailed,
    getOneStarshipPending,
    getOneStarshipSuccess,
    OneStarshipAction
} from "../../types/_request/nowStarship";
import {ISwapiStarship} from "../../../interfaces/swapi-response/IStarshipResponse";
import {StarshipService} from "../../../api/starship-service";


export const nowStarship = {
    get:  (id: number) => async (dispatch: AppDispatch) => {
        try {
            dispatch(nowStarship.getPending());
            const res = await StarshipService.getOneStarship(id);
            dispatch(nowStarship.getSuccess(res.data));
        } catch (e: any) {
            dispatch(nowStarship.getFailed("Произошла ошибка при загрузке данных"));
        }
    },

    getSuccess: (payload: ISwapiStarship): getOneStarshipSuccess => ({
        type: OneStarshipAction.GET_ONE_STARSHIP_SUCCESS,
        payload
    }),
    getFailed: (payload: string): getOneStarshipFailed => ({
        type: OneStarshipAction.GET_ONE_STARSHIP_FAILED,
        payload
    }),
    getPending: (): getOneStarshipPending => ({
        type: OneStarshipAction.GET_ONE_STARSHIP_PENDING
    }),
}