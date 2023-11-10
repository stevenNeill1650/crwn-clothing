import './cart-icon.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-open.context';

//import {ReactComponent as ShoppingIcon } from'../../assests/shopping-bag.svg';
import { CartIconContainer,ShoppingIcon,ItemCount } from './cart-icon.styles.jsx';

const CartIcon = () => {
    const {isCartOpen, setCartOpen,cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => setCartOpen(!isCartOpen);


    return (
        <CartIconContainer  onClick={toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )

};

export default CartIcon;