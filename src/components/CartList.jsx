import React from "react";

import { CartItem } from "components/CartItem";

export const CartList = ({ product }) => {
    return (
        <div className='cartList'>
            {product.map((item) => (
                <CartItem item={item} key={item.id} />
            ))}
        </div>
    );
};
