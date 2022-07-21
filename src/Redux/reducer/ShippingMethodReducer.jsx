
const shippingMethodInitialState={
    shippingMethod:{
        radiobtnmethod:"",
    }
};

export const ShippingMethodReducer = (state = shippingMethodInitialState, { type, payload }) => {
    switch (type) {
        case "SET_SHIPPING_METHOD":
            state = {shippingMethod:payload}
            return state;
        default:
            return state;

    }
};