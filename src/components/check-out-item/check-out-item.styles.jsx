import styled from "styled-components";


export const CheckOutItemContainer = styled.div`
width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const CheckOutImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;   
  }

`;



export const CheckOutItemValue = styled.span`
width: 23%;
`;

export const QuantityArrow = styled.div`
cursor: pointer;
`
export const QuantityValue = styled.span`
margin: 0 10px;
`
export const Quantity = styled(CheckOutItemValue)`
display: flex
`

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`
/* .checkout-item-container {
    
  
    .image-container {
      
  
      img {
        
      }
    }
    .name,
    .quantity,
    .price {
   
    }
  
    .quantity {
      display: flex;
  
      .arrow {
        cursor: pointer;
      }
  
      .value {
        
      }
    }
  
    .remove-button {
      
    }
  }
   */