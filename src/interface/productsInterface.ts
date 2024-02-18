import {OneProductCartInterface} from "./oneSelectedProductInterface";
import {OneProductInterface} from "./oneProductInterface";

export interface ProductsStateClass {
    products : {
        products : OneProductInterface[]
        loaderIcon: boolean
    }
    selectionLine: {
        activeCategory: string
    }
}
export interface ProductsInCartState {
    cart: {
        cartProducts: OneProductCartInterface[]
    }
}

export interface ProductsPropsClass {
    products : OneProductInterface[]
    activeCategory: string
    cartProducts: OneProductCartInterface[]
    loaderIcon: boolean

    setAllProducts(): void
    addBatchOfProducts(activeCategory: string, page: number): void
}
export interface ProductsState {
    products : OneProductInterface[]
    cartProducts: OneProductCartInterface[]
    loaderIcon: boolean
}

export interface ProductsProps {
    products: OneProductInterface[]
    cartProducts: OneProductCartInterface[]
    loaderIcon: boolean

    addBatchOfProducts(page: number): void
}