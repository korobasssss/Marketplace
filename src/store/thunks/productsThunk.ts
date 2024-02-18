import {Dispatch} from "redux";
import {ProductsAPI} from "../../api/api/productsAPI";
import {addProducts, setLoaderIcon, setProducts} from "../reducers/productsReducer";

export const setAllProducts = () => {
    return (dispatch: Dispatch) => {
        ProductsAPI.setAllProducts(0)
            .then(response => {
                dispatch(setProducts(response))
                if (response.length > 0) {
                    dispatch(setLoaderIcon(true))
                }
            })
    }
}
export const addBatchOfProducts = (activeCategory: string, skip: number) => {
    return (dispatch: Dispatch) => {
        //dispatch(setLoaderIcon(true))
        if (activeCategory === 'all') {
            ProductsAPI.setAllProducts(skip)
                .then(response => {

                    dispatch(addProducts(response))
                    if (response.length === 0) {
                        dispatch(setLoaderIcon(false))
                    }
                })
        } else {
            ProductsAPI.setOneCategory(activeCategory, skip)
                .then(response => {
                    dispatch(addProducts(response))
                    if (response.length === 0) {
                        dispatch(setLoaderIcon(false))
                    }
                })
        }
        //dispatch(setLoaderIcon(false))
    }
}
export const setLoaderIconStatus = (status: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch(setLoaderIcon(status))
    }
}