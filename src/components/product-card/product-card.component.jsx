import { useContext } from 'react';



import Button,{BUTTON_TYPES_CLASSES} from '../button/button.component';
import { CartContext } from '../../contexts/cart-open.context';

import { ProductCardContainer,ProductCardFooter } from './product-card.styles';

const ProductCard = ({product}) => {
    const {name,price, imageUrl} = product;
    const { addItemToCart } = useContext(CartContext);
    
    const addProductToCart = () => addItemToCart(product);

    return( 
            <ProductCardContainer>
                <img src={imageUrl} alt={`${name}`} />
                <ProductCardFooter>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
                </ProductCardFooter>
                <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>ADD to cart</Button>
                </ProductCardContainer>
        );
};

export default ProductCard;