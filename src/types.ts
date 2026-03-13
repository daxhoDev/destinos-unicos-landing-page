export type Gift = {
    id: number,
    name: string,
    description: string,
    category: 'ROMANTIC' | 'SPECIAL_DATE' | 'BIRTHDAY',
    price: number,
    imageUrl?: string,
}

export type Review = {
    id: number,
    text: string,
    client: string,
    imageUrl?: string,
}