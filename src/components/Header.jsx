import React from "react";
import { Link } from "react-router-dom";

import cart from "assets/icons/cart.svg";
import logo from "assets/img/logo.png";

export const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt='mainLogo-icon' />
            <div className='header__item'>
                <Link to='/cart'>
                    <button>
                        <img src={cart} alt='cart-icon' />
                    </button>
                </Link>
            </div>
        </div>
    );
};
