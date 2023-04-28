import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import filter from "./slices/filterSlice";
import products from "./slices/productsSlice";
import search from "./slices/searchSlice";
import favorite from "./slices/favoriteSlice";
import auth from "./slices/authSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    auth,
    cart,
    filter,
    products,
    search,
    favorite,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispath = typeof store.dispatch

export const useAppDispath = () => useDispatch<AppDispath>()