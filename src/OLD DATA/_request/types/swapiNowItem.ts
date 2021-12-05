import {ISwapiPeople} from "../../../interfaces/swapi-response/IPeopleResponse";
import {ISwapiStarship} from "../../../interfaces/swapi-response/IStarshipResponse";

export interface INowStarship {
    data: ISwapiStarship;
    error: string;
    isLoading: boolean;
}

export interface INowPerson {
    data: ISwapiPeople;
    error: string;
    isLoading: boolean;
}

export interface SwapiNowItemState {
    nowStarship: INowStarship;
    nowPerson: INowPerson;
}

enum SwapiNowItemActionsEnum {
    SET_NOW_STARSHIP='SET_NOW_STARSHIP',
    SET_NOW_PERSON='SET_NOW_PERSON',

    SET_NOW_STARSHIP_LOADING='SET_NOW_STARSHIP_LOADING',
    SET_NOW_PERSON_LOADING='SET_NOW_PERSON_LOADING',

    SET_NOW_STARSHIP_ERROR='SET_NOW_STARSHIP_ERROR',
    SET_NOW_PERSON_ERROR='SET_NOW_PERSON_ERROR',
}

export const setNowStarshipItem = SwapiNowItemActionsEnum.SET_NOW_STARSHIP;
export const setNowPersonItem = SwapiNowItemActionsEnum.SET_NOW_PERSON;

export const setNowStarshipLoading = SwapiNowItemActionsEnum.SET_NOW_STARSHIP_LOADING;
export const setNowPersonLoading = SwapiNowItemActionsEnum.SET_NOW_PERSON_LOADING;

export const setNowStarshipError = SwapiNowItemActionsEnum.SET_NOW_STARSHIP_ERROR;
export const setNowPersonError = SwapiNowItemActionsEnum.SET_NOW_PERSON_ERROR;

export interface SetNowStarshipAction {
    type: SwapiNowItemActionsEnum.SET_NOW_STARSHIP;
    payload: ISwapiStarship;
}

export interface SetNowPersonAction {
    type: SwapiNowItemActionsEnum.SET_NOW_PERSON;
    payload: ISwapiPeople;
}

export interface SetNowStarshipIsLoadingAction {
    type:  SwapiNowItemActionsEnum.SET_NOW_STARSHIP_LOADING;
    payload: boolean;
}

export interface SetNowPersonIsLoadingAction {
    type:  SwapiNowItemActionsEnum.SET_NOW_PERSON_LOADING;
    payload: boolean;
}

export interface SetNowStarshipErrorAction {
    type:  SwapiNowItemActionsEnum.SET_NOW_STARSHIP_ERROR;
    payload: string;
}

export interface SetNowPersonErrorAction {
    type:  SwapiNowItemActionsEnum.SET_NOW_PERSON_ERROR;
    payload: string;
}

export type SwapiNowItemAction =
    SetNowStarshipAction |
    SetNowPersonAction |
    SetNowStarshipIsLoadingAction |
    SetNowPersonIsLoadingAction |
    SetNowStarshipErrorAction |
    SetNowPersonErrorAction;