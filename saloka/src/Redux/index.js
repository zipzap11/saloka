import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import userSlice from "./user-slice";
import productsSlice from "./products-slice";
import orderSlice from "./order-slice";
import uiSlice from "./ui-slice";
import dashboardSlice from "./dashboard-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    products: productsSlice.reducer,
    order: orderSlice.reducer,
    ui: uiSlice.reducer,
    dashboard: dashboardSlice.reducer,
  },
});

export default store;
