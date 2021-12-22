import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    modalOpen: false,
    isLoading: false,
  },
  reducers: {
    openModal(state) {
      state.modalOpen = !state.modalOpen;
    },
    closeModal(state) {
      state.modalOpen = !state.modalOpen;
    },
    startLoading(state) {
      state.isLoading = true;
    },
    finishLoading(state) {
      state.isLoading = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
