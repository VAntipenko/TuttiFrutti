import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProductList } from "components/ProductList";
import { addToCart, setCart, removeFromCart } from "redux/features/cart";
import { setProducts } from "redux/features/home";

export const Home = () => {
    const dispatch = useDispatch();
    const product = useSelector(({ home }) => home.productsList);

    const handleAddToCart = (item) => {
        dispatch(setCart());
        dispatch(addToCart(item));
        dispatch(setProducts());
    };

    const handleRemoveFromCart = ({ id }) => {
        dispatch(setCart());
        dispatch(removeFromCart({ id }));
        dispatch(setProducts());
    };

    React.useEffect(() => {
        dispatch(setProducts());
    }, [dispatch]);

    return (
        <div className='home'>
            {product && (
                <ProductList
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleAddToCart={handleAddToCart}
                    product={product}
                />
            )}
        </div>
    );
};
