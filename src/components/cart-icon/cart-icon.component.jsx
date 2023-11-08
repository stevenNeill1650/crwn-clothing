import './cart-icon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-open.context';

import {ReactComponent as ShoppingIcon } from'../../assests/shopping-bag.svg';

const CartIcon = () => {
    const {isCartOpen, setCartOpen} = useContext(CartContext);

    const toggleIsCartOpen = () => setCartOpen(!isCartOpen);


    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )

};

export default CartIcon;