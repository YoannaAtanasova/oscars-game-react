import React from "react";
import { GlobalStorageKeys } from "../../Global";
import {
  CloseIcon,
  SidebarContainer,
  SidebarIcon,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarIcon onClick={toggle}>
        <CloseIcon />
      </SidebarIcon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="/movies">
            Movies
          </SidebarLink>
          <SidebarLink onClick={toggle} to={"/categories"}>
            All Categories
          </SidebarLink>
          {JSON.parse(
            sessionStorage.getItem(GlobalStorageKeys.CATEGORIES_DATA)
          ).map((category, index) => (
            <SidebarLink
              key={index}
              onClick={toggle}
              to={"/category/" + category.id}
            >
              {category.CategoryTitle}
            </SidebarLink>
          ))}
          <SidebarLink onClick={toggle} to="/leaderboard">
            Leaderboard
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
