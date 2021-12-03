import {ISwapiStarship} from "../../../../interfaces/swapi-response/IStarshipResponse";
import {CartAction, setStarshipsFromLocalstorageToReduxAction} from "../../../types/_app/cart";


export const setStarshipsFromLocalstorageToRedux = (payload: ISwapiStarship[] ): setStarshipsFromLocalstorageToReduxAction => {
    return {
        type: CartAction.SET_STARSHIPS_FROM_LOCALSTORAGE_TO_CART,
        payload
    }
}