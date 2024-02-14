import {Dispatch} from "redux";
import {ProductsAPI} from "../../api/api/productsAPI";
import {setProducts} from "../reducers/productsReducer";

export const setCurrProducts = () => {
    return (dispatch: Dispatch) => {
        ProductsAPI.setCurrentProducts()
            .then(response => {
                dispatch(setProducts(response))
                console.log(response)
            })
    }
}