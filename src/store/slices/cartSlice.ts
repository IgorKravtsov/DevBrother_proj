import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISwapiStarship} from "../../interfaces/swapi-response/IStarshipResponse";
import {CartProductStarship, CartState} from "../types/_app/cart";
import {ISwapiPeople} from "../../interfaces/swapi-response/IPeopleResponse";




const initialState: CartState = {
    starships: null,
    people: null

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addStarshipToCart: (state, action:PayloadAction<CartProductStarship>) => {
            const starship = state.starships?.find((starship) => starship.id === action.payload.id);
            starship?.count && starship.count++;
        },
        // addPersonToCart: (state, action:PayloadAction<ISwapiPeople>) => {
        //     state.people.push(action.payload)
        // },
        // setStarshipsFromLocalstorageToCart: (state, action:PayloadAction<ISwapiStarship[]>) => {
        //     state.starships = action.payload
        // },
        // setPeopleFromLocalstorageToCart: (state, action:PayloadAction<ISwapiPeople[]>) => {
        //     state.people = action.payload
        // },
        // minusPersonFromCart: (state, action:PayloadAction<ISwapiPeople>) => {
        //     const idx = state.people.findIndex(person => person.name === action.payload.name);
        //     state.people = [...state.people.slice(0, idx), ...state.people.slice(idx + 1, state.people.length)];
        // },
        // minusStarshipFromCart: (state, action:PayloadAction<ISwapiStarship>) => {
        //     const idx = state.starships.findIndex(starship => starship.name === action.payload.name);
        //     state.starships = [...state.starships.slice(0, idx), ...state.starships.slice(idx + 1, state.starships.length)];
        // },
        // deleteAllThesePeopleFromCart: (state, action:PayloadAction<ISwapiPeople>) => {
        //     state.people = state.people.filter(person => person.name !== action.payload.name);
        // },
        // deleteAllTheseStarshipsFromCart: (state, action:PayloadAction<ISwapiStarship>) => {
        //     state.starships = state.starships.filter(starship => starship.name !== action.payload.name);
        // },
    }
})

const {actions, reducer} = cartSlice;

export default reducer;

export const {

    // setStarshipsFromLocalstorageToCart,
    // setPeopleFromLocalstorageToCart,
    addStarshipToCart,
    // addPersonToCart,
    // minusPersonFromCart,
    // minusStarshipFromCart,
    // deleteAllThesePeopleFromCart,
    // deleteAllTheseStarshipsFromCart,

} = actions;