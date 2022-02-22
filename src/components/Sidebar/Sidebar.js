import React, { useState, useEffect } from "react";
import { getCategoriesData } from "../../helper/ApiRequests";
import {
  CloseIcon,
  SidebarContainer,
  SidebarIcon,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategoriesData();
      setCategoriesData(data);
    };

    fetchData();
  }, []);

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
          {categoriesData.map((category, index) => (
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
