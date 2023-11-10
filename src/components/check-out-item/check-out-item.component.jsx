

//import './check-out-item.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-open.context';
import { 
    CheckOutItemContainer,
    CheckOutImageContainer,
    CheckOutItemValue,
    Quantity,
    QuantityArrow,
    QuantityValue,
    RemoveButton } from './check-out-item.styles';



const CheckOutItem = ({cartItem}) => {
    const {name,imageUrl,quantity,price} = cartItem
    const {addItemToCart,removeItemToCart,clearItemFromCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

    return(
        <CheckOutItemContainer>
            <CheckOutImageContainer>
                <img src={imageUrl} alt={`${name}`} /> 
            </CheckOutImageContainer>
            <CheckOutItemValue>{name}</CheckOutItemValue>           
            <Quantity as='span'>
                <QuantityArrow onClick={removeItemHandler}>&#10094;</QuantityArrow>
                <QuantityValue >{quantity}</QuantityValue>
                <QuantityArrow onClick={addItemHandler}>&#10095;</QuantityArrow> 
            </Quantity>
            <CheckOutItemValue>{price}</CheckOutItemValue>
            <RemoveButton onClick={clearItemHandler}>
                &#10005;
            </RemoveButton>                         
        </CheckOutItemContainer>
    );
};

export default CheckOutItem;