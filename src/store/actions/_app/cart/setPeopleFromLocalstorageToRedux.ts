import {ISwapiPeople} from "../../../../interfaces/swapi-response/IPeopleResponse";
import {CartAction, setPeopleFromLocalstorageToReduxAction} from "../../../types/_app/cart";


export const setPeopleFromLocalstorageToRedux = (payload: ISwapiPeople[] ): setPeopleFromLocalstorageToReduxAction => {
    return {
        type: CartAction.SET_PEOPLE_FROM_LOCALSTORAGE_TO_CART,
        payload
    }
}