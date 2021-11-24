import axios, {AxiosResponse} from "axios";
import {IPeopleResponse} from "../models/swapi-response/IPeopleResponse";
import {IStarshipResponse} from "../models/swapi-response/IStarshipResponse";

export class SwapiService {
    static _baseUrl = "https://swapi.dev/api";

    static async getPeople():Promise<AxiosResponse<IPeopleResponse>> {
        return axios.get<IPeopleResponse>(`${this._baseUrl}/people`)
    }

    static async getStarships():Promise<AxiosResponse<IStarshipResponse>> {
        return axios.get<IStarshipResponse>(`${this._baseUrl}/starships`);
    }

}