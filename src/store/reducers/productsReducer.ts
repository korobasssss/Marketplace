const SET_PRODUCTS = 'SET_PRODUCTS'

const initialState = {
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

export const setProducts = (products: []) => {
    return {
        type: SET_PRODUCTS, products
    }
}

export default productsReducer