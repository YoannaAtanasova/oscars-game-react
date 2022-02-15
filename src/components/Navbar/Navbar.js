import React from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { GlobalColors, GlobalStorageKeys } from "../../Global";
import {
  BurgerMenu,
  Nav,
  NavBarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLink,
  NavLogoLink,
  NavLogo,
  NavMenu,
  DropDownWrapper,
  DropDownList,
  DropDownItem,
} from "./NavbarElements";

function Navbar({ toggle }) {
  return (
    <IconContext.Provider value={{ color: GlobalColors.White }}>
      <Nav>
        <NavBarContainer>
          <NavLogoLink to="/">
            <NavLogo src="/logo.png" />
          </NavLogoLink>

          <BurgerMenu onClick={toggle}>
            <FaBars />
          </BurgerMenu>
          <NavMenu>
            <NavItem>
              <NavLink to="/movies">Movies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" isdisabled="true">
                Catogories
              </NavLink>
              <DropDownWrapper>
                <DropDownList>
                  <DropDownItem>
                    <NavLink to={"/categories"}>All Categories</NavLink>
                  </DropDownItem>
                  {JSON.parse(
                    sessionStorage.getItem(GlobalStorageKeys.CATEGORIES_DATA)
                  ).map((category, index) => (
                    <DropDownItem key={index}>
                      <NavLink to={"/category/" + category.id}>
                        {category.CategoryTitle}
                      </NavLink>
                    </DropDownItem>
                  ))}
                </DropDownList>
              </DropDownWrapper>
            </NavItem>
            <NavItem>
              <NavLink to="/leaderboard">Leaderboard</NavLink>
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

export default Navbar;
