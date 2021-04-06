import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    item: {},
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state) => {
            state.cart = JSON.parse(sessionStorage.getItem("cart"));
        },

        addToCart: (state, action) => {
            const updateList = [...state.cart, action.payload];
            sessionStorage.setItem("cart", JSON.stringify(updateList));
        },

        plusCartItem: (state, action) => {
            const { item } = action.payload;
            const setTotalPrice = (weight, price) => {
                if (weight <= 1) {
                    state.totalPrice = 0;
                }
                if (weight % 3 === 0) {
                    return (state.totalPrice = state.totalPrice + price / 2);
                } else {
                    return (state.totalPrice = state.totalPrice + price);
                }
            };

            const updateList = state.cart.map((obj) => {
                if (item.id === obj.id) {
                    return {
                        ...item,
                        weight: obj.weight + 1,
                        totalPrice: setTotalPrice(obj.weight, obj.price),
                    };
                }
                return obj;
            });
            state.cart = updateList;
            sessionStorage.setItem("cart", JSON.stringify(updateList));
        },

        removeCartItem: (state, action) => {
            const { item } = action.payload;

            const setTotalPrice = (weight, price) => {
                if (weight <= 1) {
                    return (state.totalPrice = 0);
                }
                if (weight % 3 === 1) {
                    return (state.totalPrice = state.totalPrice - price / 2);
                } else {
                    return (state.totalPrice = state.totalPrice - price);
                }
            };

            const updateList = state.cart.map((obj) => {
                if (item.id === obj.id) {
                    return {
                        ...item,
                        weight: obj.weight <= 1 ? obj.weight : obj.weight - 1,
                        totalPrice: setTotalPrice(obj.weight, obj.price),
                    };
                }
                return obj;
            });
            state.cart = updateList;
            sessionStorage.setItem("cart", JSON.stringify(updateList));
        },

        removeFromCart: (state, action) => {
            const { id } = action.payload;
            const updateList = state.cart.filter((next) => next.id !== id);
            state.cart = updateList;
            sessionStorage.setItem("cart", JSON.stringify(updateList));
        },
    },
});

export const {
    setCart,
    addToCart,
    plusCartItem,
    removeCartItem,
    removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
