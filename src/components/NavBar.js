import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { BurgerMenu, Nav, NavBarContainer, NavItem, NavLink, NavLogoLink, NavLogo, NavMenu } from './NavBarElements';

function NavBar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav>
          <NavBarContainer>
            <NavLogoLink to="/">
              <NavLogo src="/logo.png"/>
            </NavLogoLink>
          
          <BurgerMenu onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
          </BurgerMenu>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLink to="/movies">Movies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/category/1">Catogory</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login">Log In</NavLink>
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
