import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import * as reducers from './reducers'
// import * as reducers from "./mainReducer";

// const rootReducer = combineReducers(reducers);

const rootReducer = {
    app: combineReducers({

        user: reducers.app.user.reducer,
        cart: reducers.app.cart.reducer

    }),

    request: combineReducers({

        starships: reducers.request.starships.reducer,
        people: reducers.request.people.reducer,
        nowPerson: reducers.request.nowPerson.reducer,
        nowStarship: reducers.request.nowStarship.reducer,

    }),
}

export const store = createStore(combineReducers(rootReducer), composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;