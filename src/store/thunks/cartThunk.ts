import {Dispatch} from "redux";
import {
    addCountProductToCart, addProductToCart, deleteCountProductToCart,
    deleteProductFromCart
} from "../reducers/cartReducer";
import {OneProductInterface} from "../../interface/oneProductInterface";

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