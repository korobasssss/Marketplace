export interface OneProductCartInterface {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
    count: number
}

export interface OneCartStateClass {
    oneProduct: OneProductCartInterface
}

export interface OneCartPropsClass {
    oneProduct: OneProductCartInterface

    deleteOneProductFromCart(id: number): void
    addOneCountProductToCart(id: number): void
    deleteOneCountProductFromCart(id: number): void
}
export interface OneCartPropsComponent {
    oneProduct: OneProductCartInterface

    deleteOneProductFromCart(): void
    addOneCountProductToCart(): void
    deleteOneCountProductFromCart(): void
}