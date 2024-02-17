import {OneProductCartInterface} from "./oneSelectedProductInterface";

export interface CartState {
    cart: {
        cartProducts: OneProductCartInterface[],
        count: number,
        price: number
    }
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