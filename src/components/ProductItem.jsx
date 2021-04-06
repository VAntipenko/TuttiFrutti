import React from "react";

import cart from "assets/icons/cart.svg";

export const ProductItem = ({ item, handleAddToCart, handleRemoveFromCart }) => {
    const { id, name, imgUrl, price, inCart } = item;

    const handleAddInCart = () => {
        handleAddToCart(item);
    };

    const handleRemoveFromCartItem = () => {
        handleRemoveFromCart({ id });
    };

    return (
        <div className='productItem'>
            <img src={imgUrl} alt='photo_url' />
            <div className='productItem__data'>
                <span>{name}</span>
                <span>{`$${price}`}</span>
            </div>
            {!inCart ? (
                <button onClick={handleAddInCart}>
                    Add to cart
                    <img src={cart} alt='cart' />
                </button>
            ) : (
                <button onClick={handleRemoveFromCartItem}>
                    Remove from cart
                    <img src={cart} alt='cart' />
                </button>
            )}
        </div>
    );
};
