import {LocalstorageKey} from "../types/LocalstorageKey";
import {ISwapiPeople} from "../interfaces/swapi-response/IPeopleResponse";
import {ISwapiStarship} from "../interfaces/swapi-response/IStarshipResponse";


export const saveCartToLocalstorage = (people: ISwapiPeople[], starships: ISwapiStarship[]) => {

    // starships.length > 0 && localStorage.setItem(LocalstorageKey.CartStarships, JSON.stringify(starships));
    localStorage.setItem(LocalstorageKey.CartStarships, JSON.stringify(starships));
    // people.length > 0 && localStorage.setItem(LocalstorageKey.CartPeople, JSON.stringify(people));
    localStorage.setItem(LocalstorageKey.CartPeople, JSON.stringify(people));
}