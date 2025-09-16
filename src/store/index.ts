import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import followsReducer from "./slices/followsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    follows: followsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
