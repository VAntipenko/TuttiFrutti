import React from "react";
import { useDispatch } from "react-redux";

import { addWeight, removeWeight } from "redux/features/cart";
import trashSimple from "assets/icons/trash-simple.svg";

export const CartItem = ({ item, handleRemoveFromCart }) => {
    const dispatch = useDispatch();
    const [countType, setCountType] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(false);
    const { id, name, imgUrl, price, weight, totalPrice } = item;

    const handleAddWeight = () => {
        dispatch(addWeight({ item, inputValue }));
    };

    const handleRemoveWeight = () => {
        dispatch(removeWeight({ item }));
    };

    const handleChangeCountInput = () => {
        setCountType((prevState) => !prevState);
        setInputValue(false);
    };

    const handleChange = (event) => {
        const weight = event.target.value;
        setInputValue(weight);
    };

    return (
        <div className='cartItem'>
            <img src={imgUrl} alt='itemPhoto' />
            <div className='cartItem__info'>
                <div className='cartItem__title'>
                    <span>{name}</span>
                    <img
                        src={trashSimple}
                        alt='trash-simple'
                        onClick={() => handleRemoveFromCart(id, totalPrice)}
                    />
                </div>
                <span>{`$${price}`}</span>
                <div className='cartItem__count'>
                    <span onDoubleClick={handleChangeCountInput}>Count:</span>
                    {countType ? (
                        <div className='cartItem__count--input'>
                            <input autoFocus type='number' onChange={handleChange} />
                            <button className='inputBuyButton' onClick={handleAddWeight}>
                                Buy
                            </button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={handleRemoveWeight}>-</button>
                            {weight}
                            <button onClick={handleAddWeight}>+</button>
                        </div>
                    )}
                </div>
                <p>{`Total price: ${totalPrice}`}</p>
            </div>
        </div>
    );
};
