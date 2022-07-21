import { combineReducers } from "redux";
import { ShippingReducer } from "./ShippingReducer";
import { ShippingMethodReducer } from "./ShippingMethodReducer";
import { ProductReducer, selectedProductReducer, addProductReducer } from "./ProductReducer";
import { paymentInfoReducer } from "./paymentmethodReducer";

const reducers = combineReducers({
    allProducts: ProductReducer,
    product: selectedProductReducer,
    addCart: addProductReducer,
    shippingdata: ShippingReducer,
    shippingMethod: ShippingMethodReducer,
    paymentInfo: paymentInfoReducer,



});

export default reducers;