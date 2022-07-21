
const shippingInitialState={
    shippingdata:{
        emailid:"",

        phonenumber:"",

        countryname:"",

        firstname: "",

        lastname:"",

        streetaddress:"",

        streetaddress2:"",

        cityname:"",

        statename:"",

        zipcode:"",
    }
}

export const ShippingReducer = (state = shippingInitialState, { type, payload }) => {
    switch (type) {
        case "SET_SHIPPING_DATA":
            state = {shippingdata:payload}
            return state;
        default:
            return state;

    }
};