import { ActionTypes } from "../contants/Action-Types";

const initialState = {
    products: []            //product listing data

};

const cartInitialState = {
    cart: []                //add to cart data 
};

const checkoutInitialState = {
    checkout: []                //add to cart data 
};


//set the product for productlisting page
export const ProductReducer = (state = initialState, { type, playload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: playload };
        default:
            return state;

    }
};

//selected the product for productlisting page

export const selectedProductReducer = (state = {}, { type, playload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return { ...state, ...playload };
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};
        default:
            return state;
    }
};

//add product from detail page
export const addProductReducer = (state = [], { type, playload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:

            return [...state, ...[playload]]
        default:
            return state;
    }
};

export const addCheckoutReducer = (state = [], { type, playload }) => {
    switch (type) {
        case ActionTypes.CHECKOUT_PRODUCT:

            return [...state, ...[playload]]
        default:
            return state;
    }
};

