import {
    setPeopleData,
    setPeopleLoading, setPeopleTotalCount,
    setStarshipsData,
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
            // console.log("setStarshipsData.....", state)
            return { ...state, starships: { ...state.starships, data: action.payload, isLoading: false, error: '' }, }

        case setPeopleData:
            // console.log("setPeopleData.....", state)
            return { ...state, people: { ...state.people, data: action.payload, isLoading: false, error: '' }, }

        case setStarshipsLoading:
            // console.log("setStarshipsLoading.....", state)
            return { ...state, starships: { ...state.starships, isLoading: action.payload, error: '' }, }

        case setPeopleLoading:
            // console.log("setPeopleLoading.....", state)
            return { ...state, people: { ...state.people, isLoading: action.payload, error: '' }, }

        case setStarshipsTotalCount:
            return { ...state, starships: { ...state.starships, totalCount: action.payload }, }

        case setPeopleTotalCount:
            return { ...state, people: { ...state.people, totalCount: action.payload }, }

        default:
            return state
    }
}