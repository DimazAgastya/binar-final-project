import { combineReducers, createStore } from "redux";
import sidebar from "./sidebar/reducers/sidebar";
import productReducer from './product/reducer';

window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()

const reducers = combineReducers({
    sidebar: sidebar,
    product: productReducer
    
})

const store = createStore(reducers)

export default store