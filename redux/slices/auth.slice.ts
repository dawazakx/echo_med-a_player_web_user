import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import store from "store";
import { User } from "@/types/Auth.types";

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signinUser: (state: AuthState, { payload }: PayloadAction<User>) => {
      state.user = payload;
      state.isAuthenticated = true;
    },
    logout: (state: AuthState) => {
      state.user = null;
      state.isAuthenticated = false;

      //
      store.remove("user");
      store.remove("atk");
    },
  },
});

const { actions, reducer: AuthReducer } = authSlice;

export const { signinUser, logout } = actions;
export default AuthReducer;
