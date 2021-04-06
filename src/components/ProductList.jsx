import React from "react";

import { ProductItem } from "./ProductItem";

export const ProductList = ({ product, handleAddToCart, handleRemoveFromCart }) => {
    return (
        <div className='productList'>
            {product.map((item) => (
                <ProductItem
                    key={item.id}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleAddToCart={handleAddToCart}
                    item={item}
                />
            ))}
        </div>
    );
};
