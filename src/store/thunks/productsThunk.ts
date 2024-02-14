import {Dispatch} from "redux";
import {ProductsAPI} from "../../api/api/productsAPI";
import {setProducts} from "../reducers/productsReducer";

export const setAllProducts = () => {
    return (dispatch: Dispatch) => {
        ProductsAPI.setAllProducts()
            .then(response => {
                dispatch(setProducts(response))
            })
    }
}