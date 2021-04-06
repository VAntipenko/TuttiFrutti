import React from "react";
import { Route } from "react-router-dom";

import { Home } from "pages/Home";
import { Cart } from "pages/Cart";
import { Header } from "components/Header";

export const App = () => {
    return (
        <div className='wrapper'>
            <Header />
            <div className='container'>
                <Route path='/' component={Home} exact />
                <Route path='/cart' component={Cart} exact />
            </div>
        </div>
    );
};
