import {
    addToCartPeople,
    addToCartStarship,
    CartAction,
    CartState, setPeopleFromLocalStorageToCart,
    setStarshipsFromLocalStorageToCart
} from "../../types/cart";
import {initialState} from "./initialState";


export default function cartReducer(state= initialState, action: CartAction): CartState {
    switch (action.type) {
        case addToCartStarship:
            return { ...state, starships: [...state.starships, action.payload] }

        case addToCartPeople:
            return { ...state, people: [...state.people, action.payload] }

        case setStarshipsFromLocalStorageToCart:
            return { ...state, starships: action.payload }

        case setPeopleFromLocalStorageToCart:
            return { ...state, people: action.payload }

        default:
            return state
    }
}