import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-open.context';

import CheckOutItem from '../../components/check-out-item/check-out-item.component';

import { CheckOutContainer,CheckOutHeader,HeaderBlock,CheckOutTotal } from './check-out.styles';

const CheckOut = () => {
    const { cartItems,cartTotal } =useContext(CartContext);

    return (
        <CheckOutContainer>
            <CheckOutHeader > 
                <HeaderBlock>
                    <span>image</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckOutHeader>
                {cartItems.map((item) => (
                    <CheckOutItem key={item.id} cartItem={item}/>
                    ))}
            <CheckOutTotal> 
            total: ${cartTotal}
            </CheckOutTotal>
        </CheckOutContainer>
    );
}

export default CheckOut;