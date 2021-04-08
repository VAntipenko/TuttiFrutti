import React from "react";

import { Button } from "./Button";

export const ProductItem = ({ item, handleAddToCart, handleRemoveFromCart }) => {
    const { id, name, imgUrl, price, inCart, discount } = item;

    const handleAddInCart = () => {
        handleAddToCart(item);
    };

    const handleRemoveFromCartItem = () => {
        handleRemoveFromCart({ id });
    };

    return (
        <div className='productItem'>
            {discount && (
                <div className='productItem__discount'>
                    <span>discount</span>
                </div>
            )}

            <img src={imgUrl} alt='photo_url' />
            <div className='productItem__info'>
                <p>{name}</p>
                <span>{`$${price}`}</span>
            </div>
            {!inCart ? (
                <Button onClick={handleAddInCart} add>
                    Add to cart
                </Button>
            ) : (
                <Button onClick={handleRemoveFromCartItem} remove>
                    In the basket
                </Button>
            )}
        </div>
    );
};
