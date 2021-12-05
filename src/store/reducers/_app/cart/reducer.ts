import {initialState} from "./initialState";
import {CartAction, CartActionType, CartState} from "../../../types/_app/cart";


export function reducer(state= initialState, action: CartActionType): CartState {
    switch (action.type) {

        case CartAction.ADD_TO_CART_STARSHIP:
            return { ...state, starships: [...state.starships, action.payload] }

        case CartAction.ADD_TO_CART_PEOPLE:
            return { ...state, people: [...state.people, action.payload] }

        case CartAction.SET_STARSHIPS_FROM_LOCALSTORAGE_TO_CART:
            return { ...state, starships: action.payload }

        case CartAction.SET_PEOPLE_FROM_LOCALSTORAGE_TO_CART:
            return { ...state, people: action.payload }

        default:
            return state
    }
}