import {OneProductInterface} from "../../interface/oneProductInterface";

const SET_PRODUCTS = 'SET_PRODUCTS'
const ADD_PRODUCTS = 'ADD_PRODUCTS'
const SET_LOADER_ICON = 'SET_LOADER_ICON'

const initialState : {products: OneProductInterface[], loaderIcon: boolean} = {
    products: [],
    loaderIcon: false
}

const productsReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {
        case SET_PRODUCTS : {
            stateCopy.products = action.products
            return stateCopy
        }
        case ADD_PRODUCTS : {
            for (let i = 0; i < action.products.length; i++) {
                stateCopy.products.push(action.products[i])
            }
            return stateCopy
        }
        case SET_LOADER_ICON: {
            stateCopy.loaderIcon = action.loaderIcon
            return stateCopy
        }
        default : {
            return stateCopy
        }
    }
}

export const setProducts = (products: OneProductInterface[]) => {
    return {
        type: SET_PRODUCTS, products
    }
}
export const addProducts = (products: OneProductInterface[]) => {
    return {
        type: ADD_PRODUCTS, products
    }
}
export const setLoaderIcon = (loaderIcon: boolean) => {
    return {
        type: SET_LOADER_ICON, loaderIcon
    }
}

export default productsReducer