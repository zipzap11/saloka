import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    birthDate: "",
    email: "",
    hp: "",
    address: "",
    isLogin: false,
  },
  reducers: {
    login(state, action) {
      const userData = action.payload;
      state.isLogin = true;
      state.name = userData.name;
      state.birthDate = userData.birthDate;
      state.email = userData.email;
      state.hp = userData.hp;
      state.address = userData.address;
    },
    logout(state) {
      state.isLogin = false;
      state.name = "";
      state.birthDate = "";
      state.email = "";
      state.hp = "";
      state.address = "";
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice;
