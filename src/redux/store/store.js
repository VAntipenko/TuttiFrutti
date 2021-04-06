import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../rootReducer/rootReducer";

const cart = localStorage.getItem("cart");

if (!cart) {
    sessionStorage.setItem("cart", JSON.stringify([]));
}

export const store = configureStore({
    reducer: rootReducer,
});
