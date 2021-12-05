import userReducer from "./_app/reducers/user";
import swapiReducer from "./_request/reducers/swapiData";
import swapiNowItemReducer from "./_request/reducers/swapiNowItem";
import cartReducer from "./_app/reducers/cart";


export const mainReducer = {

    userReducer,
    swapiReducer,
    cartReducer,
    swapiNowItemReducer,

}