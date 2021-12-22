import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    items: [],
  },
  reducers: {
    updateProducts(state, action) {
      state.items = [...state.items, ...action.payload];
    },
    deleteProducts(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    addProducts(state, action) {
      state.items = [...state.items, action.payload];
    },
  },
});

export const dashboardActions = dashboardSlice.actions;
export default dashboardSlice;
