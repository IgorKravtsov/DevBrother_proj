import {
    setNowPersonError,
    setNowPersonItem, setNowPersonLoading, setNowStarshipError,
    setNowStarshipItem,
    setNowStarshipLoading,
    SwapiNowItemAction,
    SwapiNowItemState
} from "../types/swapiNowItem";
import {ISwapiStarship} from "../../../interfaces/swapi-response/IStarshipResponse";
import {ISwapiPeople} from "../../../interfaces/swapi-response/IPeopleResponse";

const initialState: SwapiNowItemState = {
    nowStarship: {
        data: {} as ISwapiStarship,
        isLoading: false,
        error: '',
    },
    nowPerson: {
        data: {} as ISwapiPeople,
        isLoading: false,
        error: '',
    },
}


export default function swapiNowItemReducer(state= initialState, action: SwapiNowItemAction): SwapiNowItemState {
    switch (action.type) {

        case setNowStarshipItem:
            return { ...state, nowStarship: { ...state.nowStarship, data: action.payload, isLoading: false, error: '' }, }
        case setNowPersonItem:
            return { ...state, nowPerson: { ...state.nowStarship, data: action.payload, isLoading: false, error: '' }, }


        case setNowStarshipLoading:
            return { ...state, nowStarship: { ...state.nowStarship, isLoading: action.payload }, }
        case setNowPersonLoading:
            return { ...state, nowPerson: { ...state.nowPerson, isLoading: action.payload }, }


        case setNowStarshipError:
            return { ...state, nowStarship: { ...state.nowStarship, error: action.payload }, }
        case setNowPersonError:
            return { ...state, nowPerson: { ...state.nowPerson, error: action.payload }, }


        default:
            return state
    }
}