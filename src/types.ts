export type Gift = {
    id: number,
    image: string,
    name: string,
    description: string,
    category: string,
    price: number,
}

export type Review = {
    id: number,
    text: string,
    client: string,
    picture: string,
}