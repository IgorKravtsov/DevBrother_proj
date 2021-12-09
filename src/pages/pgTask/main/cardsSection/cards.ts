import {IProductImage, peopleImages} from "../../../../assets/productImages";
import * as util from "../../../../util";


export interface ICard {
    name: string
    categories: string[]
    img: IProductImage
    id: number
}

export const cards: ICard[] = [
    {
        name: 'name1',
        categories: ['category1', "category2", "category3"],
        img: util.getRandomImage(peopleImages),
        id:0
    },
    {
        name: 'name2',
        categories: ['category1', "category2", "category3", "category4", "category5"],
        img: util.getRandomImage(peopleImages),
        id:1
    },
    {
        name: 'name3',
        categories: ['category1', "category2"],
        img: util.getRandomImage(peopleImages),
        id:2
    },
    {
        name: 'name4',
        categories: ['category1'],
        img: util.getRandomImage(peopleImages),
        id:3
    },
    {
        name: 'name5',
        categories: ['category1'],
        img: util.getRandomImage(peopleImages),
        id:4
    },
    {
        name: 'name5',
        categories: ['category1', "category2", "category3", "category4", "category5", "category6"],
        img: util.getRandomImage(peopleImages),
        id:5
    },
]