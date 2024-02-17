import {OneProductInterface} from "../../interface/oneProductInterface";

const SET_PRODUCTS = 'SET_PRODUCTS'

const initialState : {products: OneProductInterface[]} = {
    products: []
}

const productsReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {
        case SET_PRODUCTS : {
            stateCopy.products = action.products
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

export default productsReducer