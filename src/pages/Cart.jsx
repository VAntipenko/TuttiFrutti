import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCart } from "redux/features/cart";
import { CartList } from "components/CartList";

export const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(({ cart }) => cart.cart);

    React.useEffect(() => {
        dispatch(setCart());
    }, [dispatch]);

    return <div className='cart'>{cart && <CartList product={cart} />}</div>;
};
