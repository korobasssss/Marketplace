import {OneProductCartInterface} from "./oneSelectedProductInterface";
import {setAllProductsInCart} from "../store/thunks/cartThunk";

export interface CartState {
    cart: {
        cartProducts: OneProductCartInterface[],
        count: number,
        price: number
    }
}

export interface CartStateClass {
    cartProducts: OneProductCartInterface[],
    count: number,
    price: number

    isCartButtonPressed: boolean
}

export interface CartPropsClass {
    cartProducts: OneProductCartInterface[],
    count: number,
    price: number

    isCartButtonPressed: boolean
    setCartButtonPressed(isCartButtonPressed: boolean): void
    deleteOneProductFromCart(id: number): void
    addOneCountProductToCart(id: number): void
    deleteOneCountProductFromCart(id: number): void
    setAllProductsInCart(): void
}

export interface CartProps {
    cartProducts: OneProductCartInterface[],
    count: number,
    price: number

    isCartButtonPressed: boolean
    setCartButtonPressed(isCartButtonPressed: boolean): void
    deleteOneProductFromCart(id: number): void
    addOneCountProductToCart(id: number): void
    deleteOneCountProductFromCart(id: number): void
}