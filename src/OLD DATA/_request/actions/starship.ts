import {AppDispatch} from "../../../store";
import {SwapiService} from "../../../api/swapi-service";
import {getStarshipsAllPending, StarshipsAllAction} from "../types/starships";

export const starship = {
//     get:  () => async (dispatch: AppDispatch) => {
//         try {
//             dispatch(starship.getPending());
//             const res = await SwapiService.getStarships();
//             dispatch(starship.getSuccess(res.data));
//         } catch (e: any) {
//             dispatch(starship.getFailed("Произошла ошибка при загрузке данных"));
//         }
//     },
//
//     getSuccess: (data) => ({
//         type: ''
//         payload: ''
//     }),
//     getFailed: (data) => ({}),
    getPending: ():getStarshipsAllPending => ({
        type: StarshipsAllAction.GET_STARSHIPS_ALL_PENDING
    }),
}