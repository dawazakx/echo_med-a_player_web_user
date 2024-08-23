import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import store from "store";

import { loggedUser } from "@/types/Auth.types";

const loadCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const userJSON = store.get("user");
    return userJSON ? JSON.parse(userJSON) : [];
  }
};

type UserState = {
  user: loggedUser | null;
};

const initialState: UserState = {
  user: loadCartFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state: UserState, { payload }: PayloadAction<any>) => {
      // console.log("testing...", state.user, payload);

      state.user = payload;

      saveUserToLocalStorage(payload);
    },

    clearUser: (state: UserState) => {
      state.user = null;
      store.remove("user");
    },
  },
});

const saveUserToLocalStorage = (user: []) => {
  // console.log("user", user);
  store.set("user", JSON.stringify(user));
};

const { actions, reducer: UserReducer } = userSlice;

export const { createUser, clearUser } = actions;
export default UserReducer;
