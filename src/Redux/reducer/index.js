import { combineReducers } from "redux";
import { ProductReducer, selectedProductReducer, addProductReducer } from "./ProductReducer";

const reducers = combineReducers({
    allProducts: ProductReducer,
    product: selectedProductReducer,
    addCart: addProductReducer,
});

export default reducers;