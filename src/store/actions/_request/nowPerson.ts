import {AppDispatch} from "../../index";
import {PeopleService} from "../../../api/people-service";
import { ISwapiPeople } from "../../../interfaces/swapi-response/IPeopleResponse";
import {
    getOnePersonFailed,
    getOnePersonPending,
    getOnePersonSuccess,
    OnePersonAction
} from "../../types/_request/nowPerson";


export const nowPerson = {
    get:  (id: number) => async (dispatch: AppDispatch) => {
        try {
            dispatch(nowPerson.getPending());
            const res = await PeopleService.getOnePerson(id);
            dispatch(nowPerson.getSuccess(res.data));
        } catch (e: any) {
            dispatch(nowPerson.getFailed("Произошла ошибка при загрузке данных"));
        }
    },

    getSuccess: (payload: ISwapiPeople): getOnePersonSuccess => ({
        type: OnePersonAction.GET_ONE_PERSON_SUCCESS,
        payload
    }),
    getFailed: (payload: string): getOnePersonFailed => ({
        type: OnePersonAction.GET_ONE_PERSON_FAILED,
        payload
    }),
    getPending: (): getOnePersonPending => ({
        type: OnePersonAction.GET_ONE_PERSON_PENDING
    }),
}