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
    isInCart: boolean
}

export interface OneProductPropsClass {
    product: OneProductInterface
    isInCartProducts: boolean

    addOneProductToCart(product: OneProductInterface): void
    deleteOneProductFromCart(index: number): void
}
export interface OneProductStateClass {
    product: OneProductInterface
    isInCartProducts: boolean
}

export interface OneProductProps {
    product: OneProductInterface
    isInCartProducts: boolean

    addOneProductToCart(): void
    deleteOneProductFromCart(): void
}

