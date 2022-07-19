import { combineReducers } from "redux";
import { ProductReducer, selectedProductReducer, addProductReducer, addCheckoutReducer } from "./ProductReducer";

const reducers = combineReducers({
    allProducts: ProductReducer,
    product: selectedProductReducer,
    addCart: addProductReducer,
    addCheckout: addCheckoutReducer,
});

export default reducers;