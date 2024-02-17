import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {thunk} from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';
import productsReducer from "./reducers/productsReducer";
import selectionReducer from "./reducers/selectionLineReducer";
import cartReducer from "./reducers/cartReducer";
import storage from "redux-persist/lib/storage";

let reducers = combineReducers({
    products: productsReducer,
    selectionLine: selectionReducer,
    cart: cartReducer
})

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
let reduxStore = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(reduxStore);

export default reduxStore