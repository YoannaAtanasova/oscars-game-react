import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { BurgerMenu, Nav, NavBarContainer, NavBtn, NavBtnLink, NavItem, NavLink, NavLogoLink, NavLogo, NavMenu, DropDownWrapper, DropDownList, DropDownItem } from './NavBarElements';

function NavBar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        getCategoriesData();
    }, []);
    
    const getCategoriesData = async () => {
        return await fetch("http://localhost:3030/categories")
            .then((response) => response.json())
            .then((data) => setCategoriesData(data));
      };

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
              <NavLink to="/categories">Catogories</NavLink>
              <DropDownWrapper>
                <DropDownList>
                  {categoriesData.map((category, index) => (
                    <DropDownItem key={index}>
                      <NavLink to={"/category/" + category.Id}>{category.CategoryTitle}</NavLink>
                    </DropDownItem>
                  ))}
                </DropDownList>
              </DropDownWrapper>
            </NavItem>
            <NavItem>
              <NavBtn>
                <NavBtnLink to="/login">Log In</NavBtnLink>
              </NavBtn>
            </NavItem>
          </NavMenu>
      </NavBarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default NavBar;
