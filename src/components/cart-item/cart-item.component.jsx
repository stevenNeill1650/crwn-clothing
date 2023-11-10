import './cart-item.styles.jsx';

import { CartItemContainer,ItemDetails,IMG, Name } from './cart-item.styles.jsx';


const CartItem = ({cartItem}) => {
    const {name,imageUrl,quantity,price} = cartItem
    return(
        <CartItemContainer>
            <IMG src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <Name as='span' >{name}</Name>
                <Name as='span'>{quantity} x {price}</Name>
            </ItemDetails>
        </CartItemContainer>
    );
}

export default CartItem;