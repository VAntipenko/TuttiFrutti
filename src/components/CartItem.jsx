import React from "react";
import { useDispatch } from "react-redux";

import { plusCartItem, removeCartItem } from "redux/features/cart";

export const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const { name, imgUrl, price, weight, totalPrice } = item;

    const plusItem = () => {
        dispatch(plusCartItem({ item }));
    };
    const removeItem = () => {
        dispatch(removeCartItem({ item }));
    };

    return (
        <div className='cartItem'>
            <img src={imgUrl} alt='123' />
            <div className='cartItem__data'>
                <span>{`Name: ${name}`}</span>
                <span>{`Price: $${price}`}</span>
                <div className='cartItem__count'>
                    Count:
                    <button onClick={removeItem}>-</button>
                    {weight - 1}
                    <button onClick={plusItem}>+</button>
                </div>
            </div>
            <span>{`Total price: ${totalPrice}`}</span>
        </div>
    );
};
