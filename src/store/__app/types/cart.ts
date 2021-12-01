import {ISwapiStarship} from "../../../interfaces/swapi-response/IStarshipResponse";
import {ISwapiPeople} from "../../../interfaces/swapi-response/IPeopleResponse";


export interface CartState {
    starships: ISwapiStarship[];
    people: ISwapiPeople[];
}

enum CartActionsEnum {
    ADD_TO_CART_STARSHIP="ADD_TO_CART_STARSHIP",
    ADD_TO_CART_PEOPLE="ADD_TO_CART_PEOPLE",
    SET_STARSHIPS_FROM_LOCALSTORAGE_TO_CART="SET_STARSHIPS_FROM_LOCALSTORAGE_TO_CART",
    SET_PEOPLE_FROM_LOCALSTORAGE_TO_CART="SET_PEOPLE_FROM_LOCALSTORAGE_TO_CART",
}

export const addToCartStarship = CartActionsEnum.ADD_TO_CART_STARSHIP;
export const addToCartPeople = CartActionsEnum.ADD_TO_CART_PEOPLE;
export const setStarshipsFromLocalStorageToCart = CartActionsEnum.SET_STARSHIPS_FROM_LOCALSTORAGE_TO_CART;
export const setPeopleFromLocalStorageToCart = CartActionsEnum.SET_PEOPLE_FROM_LOCALSTORAGE_TO_CART;

export interface AddToCartStarshipAction {
    type: CartActionsEnum.ADD_TO_CART_STARSHIP;
    payload: ISwapiStarship;
}

export interface AddToCartPeopleAction {
    type: CartActionsEnum.ADD_TO_CART_PEOPLE;
    payload: ISwapiPeople;
}

export interface setStarshipsFromLocalstorageToRedux {
    type: CartActionsEnum.SET_STARSHIPS_FROM_LOCALSTORAGE_TO_CART;
    payload: ISwapiStarship[];
}

export interface setPeopleFromLocalstorageToRedux {
    type: CartActionsEnum.SET_PEOPLE_FROM_LOCALSTORAGE_TO_CART;
    payload: ISwapiPeople[];
}


export type CartAction =
    AddToCartStarshipAction |
    AddToCartPeopleAction |
    setStarshipsFromLocalstorageToRedux |
    setPeopleFromLocalstorageToRedux;