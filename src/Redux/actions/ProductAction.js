import { ActionTypes } from "../contants/Action-Types";

//set product 
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        playload: products,
    };
};

//select product
export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        playload: product,
    };
};

//remove product
export const removeselectedProduct = (product) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    };
};

//for add item to cart
export const addTOCart = (p) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        playload: p,
    };
};

//for remove item from cart
export const removeFromCart = (p) => {
    return {
        type: ActionTypes.DELETE_FROM_CART,
        playload: p,
    };
};

//for save item to checkout
export const addTOCheckout = (p) => {
    return {
        type: ActionTypes.CHECKOUT_PRODUCT,
        playload: p,
    };
};

