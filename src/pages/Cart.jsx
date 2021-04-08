import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCart, removeFromCart } from "redux/features/cart";
import { CartList } from "components/CartList";
import emptyCart from "assets/img/empty-cart.png";

export const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(({ cart }) => cart.cart);

    React.useEffect(() => {
        dispatch(setCart());
    }, [dispatch]);

    const handleRemoveFromCart = (id, totalPrice) => {
        dispatch(removeFromCart({ id, totalPrice }));
    };

    return (
        <div className='cart'>
            {cart.length <= 0 ? (
                <img src={emptyCart} alt='empty-cart' />
            ) : (
                <CartList product={cart} handleRemoveFromCart={handleRemoveFromCart} />
            )}
        </div>
    );
};
