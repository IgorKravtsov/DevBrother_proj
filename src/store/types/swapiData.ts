import {ISwapiStarship} from "../../models/swapi-response/IStarshipResponse";
import {ISwapiPeople} from "../../models/swapi-response/IPeopleResponse";

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

export enum SwapiActionsEnum {
    SET_STARSHIPS_DATA='SET_STARSHIPS_DATA',
    SET_PEOPLE_DATA='SET_PEOPLE_DATA',

    SET_STARSHIPS_LOADING='SET_STARSHIPS_LOADING',
    SET_PEOPLE_LOADING='SET_PEOPLE_LOADING',

    SET_STARSHIPS_ERROR='SET_STARSHIPS_ERROR',
    SET_PEOPLE_ERROR='SET_PEOPLE_ERROR',

    SET_STARSHIPS_TOTAL_COUNT='SET_STARSHIPS_TOTAL_COUNT',
    SET_PEOPLE_TOTAL_COUNT='SET_PEOPLE_TOTAL_COUNT',
}

export const setStarshipsData = SwapiActionsEnum.SET_STARSHIPS_DATA;
export const setPeopleData = SwapiActionsEnum.SET_PEOPLE_DATA;

export const setStarshipsLoading = SwapiActionsEnum.SET_STARSHIPS_LOADING;
export const setPeopleLoading = SwapiActionsEnum.SET_PEOPLE_LOADING;

export const setStarshipsError = SwapiActionsEnum.SET_STARSHIPS_ERROR;
export const setPeopleError = SwapiActionsEnum.SET_PEOPLE_ERROR;

export const setStarshipsTotalCount = SwapiActionsEnum.SET_STARSHIPS_TOTAL_COUNT;
export const setPeopleTotalCount = SwapiActionsEnum.SET_PEOPLE_TOTAL_COUNT;

export interface SetSwapiStarshipsDataAction {
    type: SwapiActionsEnum.SET_STARSHIPS_DATA;
    payload: ISwapiStarship[];
}

export interface SetSwapiPeopleDataAction {
    type: typeof SwapiActionsEnum.SET_PEOPLE_DATA;
    payload: ISwapiPeople[];
}

export interface SetStarshipIsLoadingAction {
    type:  SwapiActionsEnum.SET_STARSHIPS_LOADING;
    payload: boolean;
}

export interface SetPeopleIsLoadingAction {
    type:  SwapiActionsEnum.SET_PEOPLE_LOADING;
    payload: boolean;
}

export interface SetStarshipsErrorAction {
    type:  SwapiActionsEnum.SET_STARSHIPS_ERROR;
    payload: string;
}

export interface SetPeopleErrorAction {
    type:  SwapiActionsEnum.SET_PEOPLE_ERROR;
    payload: string;
}

export interface SetSwapiStarshipsTotalCountAction {
    type: SwapiActionsEnum.SET_STARSHIPS_TOTAL_COUNT;
    payload: number;
}

export interface SetSwapiPeopleTotalCountAction {
    type: SwapiActionsEnum.SET_PEOPLE_TOTAL_COUNT;
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