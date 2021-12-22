import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity += newItem.quantity;
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.totalPrice;
        state.totalPrice += existingItem.totalPrice;
      } else {
        state.items = [...state.items, newItem];
        state.totalPrice += newItem.totalPrice;
      }
    },
    removeItem(state, action) {
      const removedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      state.totalQuantity--;
      state.totalPrice -= action.payload.price;
      if (removedItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== removedItem.id);
      } else {
        removedItem.quantity--;
        removedItem.totalPrice -= removedItem.price;
      }
    },
    clearItem(state, action) {
      const clearedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      state.items = state.items.filter((item) => item.id !== clearedItem.id);
      state.totalQuantity -= clearedItem.quantity;
      state.totalPrice -= clearedItem.totalPrice;
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice;
