import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import mainLogo from "assets/icons/main-logo.svg";
import shoppingCart from "assets/icons/shopping-cart.svg";

export const Header = () => {
    const cartTotalPrice = useSelector(({ cart }) => cart.cartTotalPrice);

    return (
        <div className='header-wrapper'>
            <div className='header'>
                <div className='header__title'>
                    <Link to='/'>
                        <img src={mainLogo} alt='main-logo-icon' />
                    </Link>
                </div>
                <div className='header__item'>
                    <Link to='/cart'>
                        <img src={shoppingCart} alt='shopping-cart-icon' />
                    </Link>
                    {cartTotalPrice > 0 ? `$${cartTotalPrice}` : null}
                </div>
            </div>
        </div>
    );
};
