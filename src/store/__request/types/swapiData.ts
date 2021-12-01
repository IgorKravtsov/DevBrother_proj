import {ISwapiStarship} from "../../../interfaces/swapi-response/IStarshipResponse";
import {ISwapiPeople} from "../../../interfaces/swapi-response/IPeopleResponse";

export interface IStarship {
    data: ISwapiStarship[];
    totalCount: number;
    isLoading: boolean;
    error: string;
}

export interface IPeople {
    data: ISwapiPeople[];
    totalCount: number;
    isLoading: boolean;
    error: string;
}

export interface SwapiDataState {
    starships: IStarship;
    people: IPeople;
}

enum SwapiDataActionsEnum {
    SET_STARSHIPS_DATA='SET_STARSHIPS_DATA',
    SET_PEOPLE_DATA='SET_PEOPLE_DATA',

    SET_STARSHIPS_LOADING='SET_STARSHIPS_LOADING',
    SET_PEOPLE_LOADING='SET_PEOPLE_LOADING',

    SET_STARSHIPS_ERROR='SET_STARSHIPS_ERROR',
    SET_PEOPLE_ERROR='SET_PEOPLE_ERROR',

    SET_STARSHIPS_TOTAL_COUNT='SET_STARSHIPS_TOTAL_COUNT',
    SET_PEOPLE_TOTAL_COUNT='SET_PEOPLE_TOTAL_COUNT',
}

export const setStarshipsData = SwapiDataActionsEnum.SET_STARSHIPS_DATA;
export const setPeopleData = SwapiDataActionsEnum.SET_PEOPLE_DATA;

export const setStarshipsLoading = SwapiDataActionsEnum.SET_STARSHIPS_LOADING;
export const setPeopleLoading = SwapiDataActionsEnum.SET_PEOPLE_LOADING;

export const setStarshipsError = SwapiDataActionsEnum.SET_STARSHIPS_ERROR;
export const setPeopleError = SwapiDataActionsEnum.SET_PEOPLE_ERROR;

export const setStarshipsTotalCount = SwapiDataActionsEnum.SET_STARSHIPS_TOTAL_COUNT;
export const setPeopleTotalCount = SwapiDataActionsEnum.SET_PEOPLE_TOTAL_COUNT;

export interface SetSwapiStarshipsDataAction {
    type: SwapiDataActionsEnum.SET_STARSHIPS_DATA;
    payload: ISwapiStarship[];
}

export interface SetSwapiPeopleDataAction {
    type: typeof SwapiDataActionsEnum.SET_PEOPLE_DATA;
    payload: ISwapiPeople[];
}

export interface SetStarshipIsLoadingAction {
    type:  SwapiDataActionsEnum.SET_STARSHIPS_LOADING;
    payload: boolean;
}

export interface SetPeopleIsLoadingAction {
    type:  SwapiDataActionsEnum.SET_PEOPLE_LOADING;
    payload: boolean;
}

export interface SetStarshipsErrorAction {
    type:  SwapiDataActionsEnum.SET_STARSHIPS_ERROR;
    payload: string;
}

export interface SetPeopleErrorAction {
    type:  SwapiDataActionsEnum.SET_PEOPLE_ERROR;
    payload: string;
}

export interface SetSwapiStarshipsTotalCountAction {
    type: SwapiDataActionsEnum.SET_STARSHIPS_TOTAL_COUNT;
    payload: number;
}

export interface SetSwapiPeopleTotalCountAction {
    type: SwapiDataActionsEnum.SET_PEOPLE_TOTAL_COUNT;
    payload: number;
}

export type SwapiAction =
    SetSwapiStarshipsDataAction |
    SetSwapiPeopleDataAction |

    SetStarshipIsLoadingAction |
    SetPeopleIsLoadingAction |

    SetStarshipsErrorAction |
    SetPeopleErrorAction |

    SetSwapiStarshipsTotalCountAction |
    SetSwapiPeopleTotalCountAction;