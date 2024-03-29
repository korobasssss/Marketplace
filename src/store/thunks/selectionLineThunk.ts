import {Dispatch} from "redux";
import {getAllCategories, setActiveCategory, setInputSearch} from "../reducers/selectionLineReducer";
import {ProductsAPI} from "../../api/api/productsAPI";
import {setLoaderIcon, setProducts} from "../reducers/productsReducer";
import {setAllProducts} from "./productsThunk";



export const getAllCategoryNames = () => {
    return (dispatch: Dispatch) => {
        ProductsAPI.setAllCategories()
            .then(response => {
                dispatch(getAllCategories(response))
            })
    }
}

export const getCategory = (type: string, index: number) => {
    return (dispatch: Dispatch) => {
        if (type === 'all' && index === 0) {
            // @ts-ignore
            dispatch(setAllProducts())
        } else {
            ProductsAPI.setOneCategory(type, 0)
                .then(response => {
                    dispatch(setProducts(response))
                })

        }
        dispatch(setActiveCategory(index))
        dispatch(setLoaderIcon(true))
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
            // @ts-ignore
            dispatch(setAllProducts())
        }
    }
}

export const setInputTextSearch = (inputSearch: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setInputSearch(inputSearch))
    }
}