import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { BurgerMenu, Nav, NavBarContainer, NavBtn, NavBtnLink, NavItem, NavLink, NavLogo, NavMenu } from './NavBarElements';

function NavBar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav>
          <NavBarContainer>
            <NavLogo to="/">OSCARS</NavLogo>
          
          <BurgerMenu onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
          </BurgerMenu>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </NavItem>
          </NavMenu>
        {/* <NavBtn>
            <NavBtnLink to=""></NavBtnLink>
        </NavBtn> */}
      </NavBarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default NavBar;
