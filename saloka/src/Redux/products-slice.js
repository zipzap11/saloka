import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    error: null,
    status: "",
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setErorr(state, action) {
      state.error = action.payload;
    },
    addProducts(state, action) {
      state.products = [...state.products, action.payload];
    },
  },
});
export const productsActions = productsSlice.actions;
export default productsSlice;
