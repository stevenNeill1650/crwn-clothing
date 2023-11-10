import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-open.context';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer,EmptyMessage,CartItems } from './cart-dropdown.styles';

const CartDropdown = () => {
    const { cartItems,isCartOpen,setCartOpen } =useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/check-out');
        setCartOpen(!isCartOpen);
    }

    return(
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item}/>
                    ))) : (
                        <EmptyMessage>Your Cart is empty</EmptyMessage>
                    )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;