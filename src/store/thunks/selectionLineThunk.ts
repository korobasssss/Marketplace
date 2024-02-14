import {Dispatch} from "redux";
import {setActiveCategory, setInputSearch} from "../reducers/selectionLineReducer";
import {ProductsAPI} from "../../api/api/productsAPI";
import {setProducts} from "../reducers/productsReducer";
import {setAllProducts} from "./productsThunk";



export const getCategory = (type: string, index: number) => {
    return (dispatch: Dispatch) => {
        if (type === 'all' && index === 0) {
            // @ts-ignore todo чтото с этим сделать
            dispatch(setAllProducts())
        } else {
            ProductsAPI.setOneCategory(type)
                .then(response => {
                    dispatch(setProducts(response))
                })

        }
        dispatch(setActiveCategory(index))
    }
}

export const findProduct = (product: string) => {
    return (dispatch: Dispatch) => {
        if (product.length >= 3) {
            ProductsAPI.findProduct(product)
                .then(response => {
                    dispatch(setProducts(response))
                })
        } else {
            // @ts-ignore todo чтото с этим сделать
            dispatch(setAllProducts())
        }
    }
}

export const setInputTextSearch = (inputSearch: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setInputSearch(inputSearch))
    }
}