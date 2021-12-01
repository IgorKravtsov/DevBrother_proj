import {
    addToCartPeople,
    AddToCartPeopleAction,
    addToCartStarship,
    AddToCartStarshipAction,
    setPeopleFromLocalStorageToCart,
    setPeopleFromLocalstorageToRedux,
    setStarshipsFromLocalStorageToCart,
    setStarshipsFromLocalstorageToRedux
} from "../types/cart";
import {ISwapiStarship} from "../../../interfaces/swapi-response/IStarshipResponse";
import {ISwapiPeople} from "../../../interfaces/swapi-response/IPeopleResponse";


export const cartActionCreators = {

    addToCartStarship: (payload: ISwapiStarship ): AddToCartStarshipAction => {

        return {
            type: addToCartStarship,
            payload
        }
    },

    addToCartPeople: (payload: ISwapiPeople ): AddToCartPeopleAction => {
        return {
            type: addToCartPeople,
            payload
        }
    },

    setPeopleFromLocalstorageToRedux: (payload: ISwapiPeople[] ): setPeopleFromLocalstorageToRedux => {
        return {
            type: setPeopleFromLocalStorageToCart,
            payload
        }
    },

    setStarshipsFromLocalstorageToRedux: (payload: ISwapiStarship[] ): setStarshipsFromLocalstorageToRedux => {
        return {
            type: setStarshipsFromLocalStorageToCart,
            payload
        }
    },

}