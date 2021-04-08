import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    item: {},
    cartTotalPrice: 0,
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

        removeFromCart: (state, action) => {
            const { id, totalPrice } = action.payload;
            const updateList = state.cart.filter((next) => next.id !== id);
            state.cart = updateList;
            state.cartTotalPrice -= totalPrice;
            sessionStorage.setItem("cart", JSON.stringify(updateList));
        },

        addWeight: (state, action) => {
            const { item, inputValue } = action.payload;
            const updatedList = state.cart.map((obj) => {
                if (item.id === obj.id) {
                    return {
                        ...item,
                        weight: (() => {
                            if (inputValue && inputValue <= 0) {
                                obj.weight = 0;
                            }
                            if (inputValue) {
                                return obj.weight + parseInt(inputValue);
                            }
                            return obj.weight + 1;
                        })(),
                        totalPrice: (() => {
                            let { totalPrice, price, weight, discount } = obj;
                            state.cartTotalPrice += inputValue * price;
                            if (inputValue && inputValue <= 0) {
                                state.cartTotalPrice -= totalPrice;
                                return (totalPrice = 0);
                            }
                            if (inputValue) {
                                if (discount) {
                                    const count = Math.floor(inputValue / 3) * 5;
                                    state.cartTotalPrice -= count;
                                    return (totalPrice += inputValue * price - count);
                                }
                                totalPrice += inputValue * price;
                                return totalPrice;
                            }

                            if (discount && weight % 3 === 2) {
                                state.cartTotalPrice += price / 2;
                                return (totalPrice += price / 2);
                            }
                            state.cartTotalPrice += price;
                            return (totalPrice += price);
                        })(),
                    };
                }
                return obj;
            });
            state.cart = updatedList;
            sessionStorage.setItem("cart", JSON.stringify(updatedList));
        },

        removeWeight: (state, action) => {
            const { item } = action.payload;

            const updateList = state.cart.map((obj) => {
                if (item.id === obj.id) {
                    return {
                        ...item,
                        weight: obj.weight <= 0 ? obj.weight : obj.weight - 1,
                        totalPrice: (() => {
                            let { totalPrice, price, weight, discount } = obj;
                            if (weight <= 0) {
                                return (totalPrice = 0);
                            }
                            if (discount && weight % 3 === 0) {
                                state.cartTotalPrice -= price / 2;
                                return (totalPrice -= price / 2);
                            }
                            state.cartTotalPrice -= price;
                            return (totalPrice -= price);
                        })(),
                    };
                }
                return obj;
            });
            state.cart = updateList;
            sessionStorage.setItem("cart", JSON.stringify(updateList));
        },
    },
});

export const { setCart, addToCart, addWeight, removeWeight, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
