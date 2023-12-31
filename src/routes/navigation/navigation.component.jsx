import { Fragment,useContext } from 'react';
import { Outlet} from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart-open.context';

import { ReactComponent as CrwnLogo } from '../../assests/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

/* import './navigation.styles.jsx'; */
import { NavigationContainer,NavLinks,NavLink,LogoContainer } from './navigation.styles';




const Navigation = () => {
  const {currentUser} =useContext(UserContext);
  const {isCartOpen} =useContext(CartContext);
 

    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to='/'>
            <CrwnLogo className='logo'/>
          </LogoContainer>
          <NavLinks>
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {
              currentUser ? (
                <NavLink  onClick={signOutUser}>{''}SIGN OUT{''}</NavLink>
                ) : ( 
                <NavLink to='/auth'>
                  SIGN IN
                </NavLink> 
              )} 
              <NavLink>
                  <CartIcon></CartIcon>
              </NavLink>    
          </NavLinks>
          {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    );
  }
  
  export default Navigation