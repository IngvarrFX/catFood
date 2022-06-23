import cat from "./assets/cat.png";

export const data: Array<DataType> = [
    {
        id: "1",
        tagline: "Сказочное заморское яство",
        title: "Нямушка",
        withWhatFeed: "с фуа-гра",
        measureQuantity: 10,
        measure: "порций",
        promotion: {
            count: "",
            present: "мышь в подарок",
        },
        weight: "0,5",
        unitWeight: "кг",
        description: "Печень утки разварная с артишоками.",
        image: cat,
        isSelected: false,
        inStock: true,
    },
    {
        id: "2",
        tagline: "Сказочное заморское яство",
        title: "Нямушка",
        withWhatFeed: "с рыбой",
        measureQuantity: 40,
        measure: "порций",
        promotion: {
            count: "2",
            present: "мыши в подарок"
        },
        weight: "2",
        unitWeight: "кг",
        description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        image: cat,
        isSelected: false,
        inStock: true,
    },
    {
        id: "3",
        tagline: "Сказочное заморское яство",
        title: "Нямушка",
        withWhatFeed: "с курой",
        measureQuantity: 100,
        measure: "порций",
        promotion: {
            count: "5", present: "мышей в подарок заказчик доволен",
        },
        weight: "5",
        unitWeight: "кг",
        description: "Печалька, с курой закончился.",
        image: cat,
        isSelected: false,
        inStock: false,
    },
]

export type DataType = {
    id: string
    tagline: string
    title: string
    withWhatFeed: string
    measureQuantity: number
    measure: string
    promotion: PromotionType
    weight: string
    unitWeight: string
    description: string
    image: string
    isSelected: boolean
    inStock: boolean
}

export type PromotionType = {
    count: string,
    present: string
}
