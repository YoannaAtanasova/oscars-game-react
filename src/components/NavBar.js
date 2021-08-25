import React from 'react';
import {FaBars} from 'react-icons/fa'
import { BurgerMenu, Nav, NavBarContainer, NavBtn, NavBtnLink, NavItem, NavLink, NavLogo, NavMenu } from './NavBarElements';

function NavBar() {
  return (
    <Nav>
      <NavBarContainer>
        <NavLogo to="/">OSCARS</NavLogo>
      </NavBarContainer>
      <BurgerMenu>
        <FaBars />
      </BurgerMenu>
      <NavMenu>
        <NavItem>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
        </NavItem>
      </NavMenu>
     {/* <NavBtn>
        <NavBtnLink to=""></NavBtnLink>
     </NavBtn> */}
    </Nav>
  );
}

export default NavBar;
