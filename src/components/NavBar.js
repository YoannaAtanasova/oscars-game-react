import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { GlobalColors } from '../Global';
import { BurgerMenu, Nav, NavBarContainer, NavBtn, NavBtnLink, NavItem, NavLink, NavLogoLink, NavLogo, NavMenu, DropDownWrapper, DropDownList, DropDownItem } from './styled/NavBarElements';

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        getCategoriesData();
    }, []);
    
    const getCategoriesData = async () => {
        return await fetch(`${process.env.REACT_APP_API_URL}/categories`)
            .then((response) => response.json())
            .then((data) => setCategoriesData(data));
      };

  return (
    <IconContext.Provider value={{color: GlobalColors.White}}>
      <Nav>
          <NavBarContainer>
            <NavLogoLink to="/">
              <NavLogo src="/logo.png"/>
            </NavLogoLink>
          
          <BurgerMenu onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
          </BurgerMenu>
          <NavMenu click={click}>
            <NavItem>
              <NavLink onClick={handleClick} to="/movies">Movies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" isdisabled="true">Catogories</NavLink>
              <DropDownWrapper>
                <DropDownList>
                  <DropDownItem>
                      <NavLink onClick={handleClick} to={"/categories"}>All Categories</NavLink>
                  </DropDownItem>
                  {categoriesData.map((category, index) => (
                    <DropDownItem key={index}>
                      <NavLink onClick={handleClick} to={"/category/" + category.id}>{category.CategoryTitle}</NavLink>
                    </DropDownItem>
                  ))}
                </DropDownList>
              </DropDownWrapper>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleClick} to="/leaderboard">Leaderboard</NavLink>
            </NavItem>
            <NavItem>
              <NavBtn>
                <NavBtnLink onClick={handleClick} to="/login">Log In</NavBtnLink>
              </NavBtn>
            </NavItem>
          </NavMenu>
      </NavBarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default NavBar;
