import {Dispatch} from "redux";
import {
    addCountProductToCart, addProductToCart, deleteCountProductToCart,
    deleteProductFromCart, setAllProductsCart
} from "../reducers/cartReducer";
import {OneProductInterface} from "../../interface/oneProductInterface";

export const setAllProductsInCart = () => {
    return (dispatch: Dispatch) => {
        if (localStorage.getItem('persist:root') !== null)  {
            // @ts-ignore
            let root = JSON.parse(localStorage.getItem('persist:root'))
            if (root.cart.cartProducts === undefined) {
                dispatch(setAllProductsCart([]))
            } else {
                dispatch(setAllProductsCart(root.cart.cartProducts))
            }

        }
    }
}
export const addOneProductToCart = (product: OneProductInterface) => {
    return (dispatch: Dispatch) => {
        dispatch(addProductToCart(product))
    }
}
export const addOneCountProductToCart = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(addCountProductToCart(id))
    }
}
export const deleteOneProductFromCart = (index: number) => {
    return (dispatch: Dispatch) => {
        dispatch(deleteProductFromCart(index))
    }
}
export const deleteOneCountProductFromCart = (index: number) => {
    return (dispatch: Dispatch) => {
        dispatch(deleteCountProductToCart(index))
    }
}