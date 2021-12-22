import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    items: [],
    checkoutDetail: {
      firstName: "",
      lastName: "",
      address: "",
      suite: "",
      city: "",
      zipCode: "",
      additionalInformation: "",
    },
    shipping: {
      method: "",
      price: 0,
    },
    totalPrice: 0,
    paymentDetails: {
      method: "",
      cardNumber: "",
    },
  },
  reducers: {
    setItems(state, action) {
      state.items = action.payload.items;
      state.totalPrice += action.payload.totalPrice;
    },
    setCheckoutDetail(state, action) {
      state.checkoutDetail = action.payload;
    },
    setShipping(state, action) {
      state.shipping = action.payload;
      state.totalPrice += action.payload.price;
    },
    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
    setPatment(state, action) {
      state.paymentMethod = action.payload;
    },
    resetOrder(state) {
      state.items = [];
      state.checkoutDetail = {
        firstName: "",
        lastName: "",
        address: "",
        suite: "",
        city: "",
        zipCode: "",
        additionalInformation: "",
      };
      state.shipping = {
        method: "",
        price: 0,
      };
      state.totalPrice = 0;
      state.paymentDetails = {
        method: "",
        cardNumber: "",
      };
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice;
