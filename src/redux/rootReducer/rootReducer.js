import { combineReducers } from "@reduxjs/toolkit";

import homeReducer from "redux/features/home";
import cartReducer from "redux/features/cart";

export const rootReducer = combineReducers({
    home: homeReducer,
    cart: cartReducer,
});
