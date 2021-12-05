import {ISwapiPeople} from "../../../../interfaces/swapi-response/IPeopleResponse";
import {AddToCartPeopleAction, CartAction} from "../../../types/_app/cart";

export const addPeopleToCart = (payload: ISwapiPeople ): AddToCartPeopleAction => {
    return {
        type: CartAction.ADD_TO_CART_PEOPLE,
        payload
    }
}
