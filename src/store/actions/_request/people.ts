import {AppDispatch} from "../../index";
import {PeopleService} from "../../../api/people-service";
import {IPeopleResponse} from "../../../interfaces/swapi-response/IPeopleResponse";
import {
    getPeopleAllFailed,
    getPeopleAllPending,
    getPeopleAllSuccess,
    PeopleAllAction
} from "../../types/_request/people";

export const people = {
    get:  () => async (dispatch: AppDispatch) => {
        try {
            dispatch(people.getPending());
            const res = await PeopleService.getAllPeople();
            dispatch(people.getSuccess(res.data));
        } catch (e: any) {
            dispatch(people.getFailed("Произошла ошибка при загрузке данных"));
        }
    },

    getSuccess: (payload: IPeopleResponse): getPeopleAllSuccess => ({
        type: PeopleAllAction.GET_PEOPLE_ALL_SUCCESS,
        payload
    }),
    getFailed: (payload: string): getPeopleAllFailed => ({
        type: PeopleAllAction.GET_PEOPLE_ALL_FAILED,
        payload
    }),
    getPending: (): getPeopleAllPending => ({
        type: PeopleAllAction.GET_PEOPLE_ALL_PENDING
    }),
}