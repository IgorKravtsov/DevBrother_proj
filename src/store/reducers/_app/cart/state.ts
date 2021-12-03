import {RootState} from "../../../index";

export const state = {

    setCart: {
        starships: (state: RootState) => state.app.cart.starships,
        people: (state: RootState) => state.app.cart.people,
    }

}