import React from "react";

import { CartItem } from "components/CartItem";

export const CartList = ({ product, handleRemoveFromCart }) => {
    return (
        <div className='cartList'>
            {product.map((item) => (
                <CartItem item={item} key={item.id} handleRemoveFromCart={handleRemoveFromCart} />
            ))}
        </div>
    );
};
