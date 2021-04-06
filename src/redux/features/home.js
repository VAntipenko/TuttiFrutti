import { createSlice } from "@reduxjs/toolkit";
import some from "lodash/some";

import { products } from "json/products.json";

const initialState = {
    productsList: [],
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setProducts: (state) => {
            const cart = JSON.parse(sessionStorage.getItem("cart"));
            state.productsList = products.map((item) => ({
                ...item,
                inCart: some(cart, {
                    id: item.id,
                }),
            }));
        },
    },
});

export const { setProducts } = homeSlice.actions;

export default homeSlice.reducer;
