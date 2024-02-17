import {OneProductCartInterface} from "./oneSelectedProductInterface";
import {OneProductInterface} from "./oneProductInterface";

export interface ProductsStateClass {
    products : {
        products : OneProductInterface[]
    }
}
export interface ProductsInCartState {
    cart: {
        cartProducts: OneProductCartInterface[]
    }
}

export interface ProductsPropsClass {
    products : OneProductInterface[]
    cartProducts: OneProductCartInterface[]

    setAllProducts(): void
}
export interface ProductsState {
    products : OneProductInterface[]
    cartProducts: OneProductCartInterface[]
}

export interface ProductsProps {
    products: OneProductInterface[]
    cartProducts: OneProductCartInterface[]
}