import { configureStore,combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import { baseApi } from "./api/baseApi";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

    
const persistConfig = {
  key: "root",
  storage
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    product: productReducer,
    cart: cartReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  })
);


export const store = configureStore({
  reducer:persistedReducer ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
