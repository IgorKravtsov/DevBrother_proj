import {
    setPeopleData, setPeopleError,
    setPeopleLoading, setPeopleTotalCount,
    setStarshipsData, setStarshipsError,
    setStarshipsLoading, setStarshipsTotalCount,
    SwapiAction,
    SwapiDataState
} from "../types/swapiData";

const initialState: SwapiDataState = {
    starships: {
        data: [],
        isLoading: false,
        error: '',
        totalCount: 0
    },
    people: {
        data: [],
        isLoading: false,
        error: '',
        totalCount: 0
    },
}

export default function swapiReducer(state= initialState, action: SwapiAction): SwapiDataState {
    switch (action.type) {
        case setStarshipsData:
            return { ...state, starships: { ...state.starships, data: action.payload, isLoading: false, error: '' }, }

        case setPeopleData:
            return { ...state, people: { ...state.people, data: action.payload, isLoading: false, error: '' }, }

        case setStarshipsLoading:
            return { ...state, starships: { ...state.starships, isLoading: action.payload }, }

        case setPeopleLoading:
            return { ...state, people: { ...state.people, isLoading: action.payload }, }

        case setStarshipsError:
            return { ...state, starships: { ...state.starships, error: action.payload }, }

        case setPeopleError:
            return { ...state, people: { ...state.people, error: action.payload }, }

        case setStarshipsTotalCount:
            return { ...state, starships: { ...state.starships, totalCount: action.payload }, }

        case setPeopleTotalCount:
            return { ...state, people: { ...state.people, totalCount: action.payload }, }

        default:
            return state
    }
}