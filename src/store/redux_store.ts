import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {thunk} from 'redux-thunk'
import productsReducer from "./reducers/productsReducer";
import selectionReducer from "./reducers/selectionLineReducer";

let reducers = combineReducers({
    products: productsReducer,
    selectionLine: selectionReducer
})

let reduxStore = createStore(reducers, applyMiddleware(thunk))

export default reduxStore