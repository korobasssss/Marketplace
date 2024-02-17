import {OneProductInterface} from "../../interface/oneProductInterface";
import {OneProductCartInterface} from "../../interface/oneSelectedProductInterface";

const SET_ALL_PRODUCTS_CART = 'SET_ALL_PRODUCTS_CART'
const ADD_PRODUCT = 'ADD_PRODUCT'
const ADD_COUNT_PRODUCT = 'ADD_COUNT_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const DELETE_COUNT_PRODUCT = 'DELETE_COUNT_PRODUCT'


const initialState : {cartProducts: OneProductCartInterface[], count: number, price: number} = {
    cartProducts: [],
    count: 0,
    price: 0
}

const cartReducer = (state = initialState, action : any) => {
    let stateCopy = {...state, cartProducts: [...state.cartProducts]}
    switch (action.type) {
        case SET_ALL_PRODUCTS_CART: {
            stateCopy.cartProducts = action.cartProducts
            return stateCopy
        }
        case ADD_PRODUCT: {
            action.oneProduct['count'] = 1
            stateCopy.cartProducts.push(action.oneProduct)
            stateCopy.count += 1
            stateCopy.price += action.oneProduct.price
            return stateCopy
        }
        case ADD_COUNT_PRODUCT : {
            stateCopy.cartProducts.map((oneProduct: OneProductCartInterface, index) => {
                if (oneProduct.id === action.id) {
                    stateCopy.cartProducts[index].count += 1
                    stateCopy.price += stateCopy.cartProducts[index].price
                    return true
                }
                return false
            } )

            return stateCopy
        }
        case DELETE_PRODUCT: {
            stateCopy.cartProducts.map((oneProduct: OneProductCartInterface, index) => {
                if (oneProduct.id === action.id) {
                    stateCopy.price -= stateCopy.cartProducts[index].price * stateCopy.cartProducts[index].count
                    stateCopy.cartProducts.splice(index, 1)
                    return true
                }
                return false
            })
            stateCopy.count -= 1
            return stateCopy
        }
        case DELETE_COUNT_PRODUCT : {
            stateCopy.cartProducts.map((oneProduct: OneProductCartInterface, index) => {
                if (oneProduct.id === action.id) {
                    stateCopy.cartProducts[index].count -= 1
                    stateCopy.price -= stateCopy.cartProducts[index].price
                    return true
                }
                return false
            } )
            return stateCopy
        }
        default:
            return stateCopy
    }
}

export const setAllProductsCart = (cartProducts: OneProductCartInterface[]) => {
    return {
        type: SET_ALL_PRODUCTS_CART, cartProducts
    }
}
export const addProductToCart = (oneProduct: OneProductInterface) => {
    return {
        type: ADD_PRODUCT, oneProduct
    }
}
export const addCountProductToCart = (id: number) => {
    return {
        type: ADD_COUNT_PRODUCT, id
    }
}
export const deleteProductFromCart = (id: number) => {
    return {
        type: DELETE_PRODUCT, id
    }
}
export const deleteCountProductToCart = (id: number) => {
    return {
        type: DELETE_COUNT_PRODUCT, id
    }
}

export default cartReducer