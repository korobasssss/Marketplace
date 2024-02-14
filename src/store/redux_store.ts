import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {thunk} from 'redux-thunk'
import productsReducer from "./reducers/productsReducer";

let reducers = combineReducers({
    products: productsReducer,
})

let reduxStore = createStore(reducers, applyMiddleware(thunk))

export default reduxStore