import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    location: [],
    category: "",
    price: [],
  },
  reducers: {
    addFilter(state, action) {
      const data = action.payload;
      if (data.type === "location") {
        state.location.push(data.query);
      } else if (data.type === "category") {
        state.category = data.query;
      } else if (data.type === " price") {
        state.price = [...data.query];
      }
    },
  },
});

export const filterAction = filterSlice.actions;
export default filterSlice;
