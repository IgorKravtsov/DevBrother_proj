import {ISwapiStarship} from "../../../../interfaces/swapi-response/IStarshipResponse";
import {AddToCartStarshipAction, CartAction} from "../../../types/_app/cart";

export const addStarshipToCart = (payload: ISwapiStarship ): AddToCartStarshipAction => {

    return {
        type: CartAction.ADD_TO_CART_STARSHIP,
        payload
    }
}