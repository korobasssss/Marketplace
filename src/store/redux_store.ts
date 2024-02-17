import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {thunk} from 'redux-thunk'
import productsReducer from "./reducers/productsReducer";
import selectionReducer from "./reducers/selectionLineReducer";
import cartReducer from "./reducers/cartReducer";

let reducers = combineReducers({
    products: productsReducer,
    selectionLine: selectionReducer,
    cart: cartReducer
})

let reduxStore = createStore(reducers, applyMiddleware(thunk))

export default reduxStore