export interface OneProductInterface {
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
}

export interface OneProductPropsClass {
    product: OneProductInterface

    addOneProductToCart(product: OneProductInterface): void
    deleteOneProductFromCart(index: number): void
}
export interface OneProductStateClass {
    product: OneProductInterface
}

export interface OneProductProps {
    product: OneProductInterface

    addOneProductToCart(): void
    deleteOneProductFromCart(): void
}

