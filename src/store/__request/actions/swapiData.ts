import {
    setPeopleData,
    setPeopleError,
    SetPeopleErrorAction,
    SetPeopleIsLoadingAction,
    setPeopleLoading,
    setPeopleTotalCount,
    SetStarshipIsLoadingAction,
    setStarshipsData,
    setStarshipsError,
    SetStarshipsErrorAction,
    setStarshipsLoading,
    setStarshipsTotalCount,
    SetSwapiPeopleDataAction,
    SetSwapiPeopleTotalCountAction,
    SetSwapiStarshipsDataAction,
    SetSwapiStarshipsTotalCountAction,
} from "../types/swapiData";
import {ISwapiPeople} from "../../../interfaces/swapi-response/IPeopleResponse";
import {ISwapiStarship} from "../../../interfaces/swapi-response/IStarshipResponse";
import {AppDispatch} from "../../index";
import {SwapiService} from "../../../services/swapi-service";


export const swapiActionCreators = {

    setSwapiStarshipsData: (payload: ISwapiStarship[] ): SetSwapiStarshipsDataAction => ({ type: setStarshipsData, payload }),
    setSwapiPeopleData: (payload: ISwapiPeople[] ): SetSwapiPeopleDataAction => ({ type: setPeopleData, payload }),

    setStarshipsLoading: (payload: boolean ): SetStarshipIsLoadingAction => ({ type: setStarshipsLoading, payload }),
    setPeopleLoading: (payload: boolean ): SetPeopleIsLoadingAction => ({ type: setPeopleLoading, payload }),

    setStarshipsError: (payload: string ): SetStarshipsErrorAction => ({ type: setStarshipsError, payload }),
    setPeopleError: (payload: string ): SetPeopleErrorAction => ({ type: setPeopleError, payload }),

    setStarshipsTotalCount: (payload: number): SetSwapiStarshipsTotalCountAction => ({ type: setStarshipsTotalCount, payload }),
    setPeopleTotalCount: (payload: number): SetSwapiPeopleTotalCountAction => ({ type: setPeopleTotalCount, payload }),

    getStarshipsData: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(swapiActionCreators.setStarshipsLoading(true));
            const res = await SwapiService.getStarships();
            dispatch(swapiActionCreators.setSwapiStarshipsData(res.data.results));
            dispatch(swapiActionCreators.setStarshipsTotalCount(res.data.count));
        } catch (e: any) {
            dispatch(swapiActionCreators.setStarshipsError("Произошла ошибка при загрузке данных"));
        } finally {
            dispatch(swapiActionCreators.setStarshipsLoading(false));
        }
    },
    getPeopleData: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(swapiActionCreators.setPeopleLoading(true));
            const res = await SwapiService.getPeople();
            dispatch(swapiActionCreators.setSwapiPeopleData(res.data.results));
            dispatch(swapiActionCreators.setPeopleTotalCount(res.data.count));
        } catch (e: any) {
            dispatch(swapiActionCreators.setPeopleError("Произошла ошибка при загрузке данных"));
        } finally {
            dispatch(swapiActionCreators.setPeopleLoading(false));
        }
    },

}