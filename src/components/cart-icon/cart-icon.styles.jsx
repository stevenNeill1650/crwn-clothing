import styled from "styled-components";
import { Link } from "react-router-dom";
import {ReactComponent as ShoppingSvg } from'../../assests/shopping-bag.svg';


export const CartIconContainer = styled(Link)`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const ShoppingIcon = styled(ShoppingSvg)`
width: 24px;
height: 24px;
`


export const ItemCount = styled.span`
position: absolute;
font-size: 10px;
font-weight: bold;
bottom: 12px;
`
/* .cart-icon-container {
    
  
    .shopping-icon {
      
    }
  
    .item-count {
      
    }
  }
   */