import cat from "./assets/cat.png";

export const data: Array<DataType> = [
    {
        id: "1",
        tagline: "Сказочное заморское яство",
        title: "Нямушка",
        withWhatFeed: "с фуа-гра",
        measureQuantity: 10,
        measure: "порций",
        promotion: "мышь в подарок",
        weight: "0,5",
        unitWeight: "кг",
        description: "Печень утки разварная с артишоками.",
        image: cat,
        isSelected: false,
    },
    {
        id: "2",
        tagline: "Сказочное заморское яство",
        title: "Нямушка",
        withWhatFeed: "с рыбой",
        measureQuantity: 40,
        measure: "порций",
        promotion: "2 мыши в подарок",
        weight: "2",
        unitWeight: "кг",
        description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        image: cat,
        isSelected: false,
    },
    {
        id: "3",
        tagline: "Сказочное заморское яство",
        title: "Нямушка",
        withWhatFeed: "с курой",
        measureQuantity: 100,
        measure: "порций",
        promotion: "5 мышей в подарок заказчик доволен",
        weight: "5",
        unitWeight: "кг",
        description: "Печалька, с курой закончился.",
        image: cat,
        isSelected: false,
    },
]

export type DataType = {
    id: string
    tagline: string
    title: string
    withWhatFeed: string
    measureQuantity:number
    measure: string
    promotion: string
    weight: string
    unitWeight: string
    description: string
    image: string
    isSelected: boolean
}
