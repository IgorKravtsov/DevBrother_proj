import {ISwapiStarship} from "../../../interfaces/swapi-response/IStarshipResponse";
import {
    SetNowPersonAction, setNowPersonError, SetNowPersonErrorAction, SetNowPersonIsLoadingAction,
    setNowPersonItem, setNowPersonLoading,
    SetNowStarshipAction, setNowStarshipError, SetNowStarshipErrorAction,
    SetNowStarshipIsLoadingAction,
    setNowStarshipItem, setNowStarshipLoading
} from "../types/swapiNowItem";
import {ISwapiPeople} from "../../../interfaces/swapi-response/IPeopleResponse";
import {setStarshipsError, SetStarshipsErrorAction} from "../types/swapiData";
import {AppDispatch} from "../../../store";
import {SwapiService} from "../../../api/swapi-service";


export const swapiNowItemActionCreators = {

    // setNowStarshipItem: (payload: ISwapiStarship ): SetNowStarshipAction => ({ type: setNowStarshipItem, payload }),
    // setNowPersonItem: (payload: ISwapiPeople ): SetNowPersonAction => ({ type: setNowPersonItem, payload }),
    //
    // setNowStarshipLoading: (payload: boolean ): SetNowStarshipIsLoadingAction => ({ type: setNowStarshipLoading, payload }),
    // setNowPersonLoading: (payload: boolean ): SetNowPersonIsLoadingAction => ({ type: setNowPersonLoading, payload }),
    //
    // setNowStarshipError: (payload: string ): SetNowStarshipErrorAction => ({ type: setNowStarshipError, payload }),
    // setNowPersonError: (payload: string ): SetNowPersonErrorAction => ({ type: setNowPersonError, payload }),
    //
    // getNowStarshipItem: (id: number) => async (dispatch: AppDispatch) => {
    //     try {
    //         dispatch(swapiNowItemActionCreators.setNowStarshipLoading(true));
    //         const res = await SwapiService.getOneStarship(id);
    //         dispatch(swapiNowItemActionCreators.setNowStarshipItem(res.data));
    //     } catch (e: any) {
    //         dispatch(swapiNowItemActionCreators.setNowStarshipError("Произошла ошибка при загрузке данных"));
    //     } finally {
    //         dispatch(swapiNowItemActionCreators.setNowStarshipLoading(false));
    //     }
    // },
    //
    // getNowPersonItem: (id: number) => async (dispatch: AppDispatch) => {
    //     try {
    //         dispatch(swapiNowItemActionCreators.setNowPersonLoading(true));
    //         const res = await SwapiService.getOnePerson(id);
    //         dispatch(swapiNowItemActionCreators.setNowPersonItem(res.data));
    //     } catch (e: any) {
    //         dispatch(swapiNowItemActionCreators.setNowPersonError("Произошла ошибка при загрузке данных"));
    //     } finally {
    //         dispatch(swapiNowItemActionCreators.setNowPersonLoading(false));
    //     }
    // },
}