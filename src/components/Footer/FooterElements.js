import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  z-index: 10;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 204px;
  margin-top: -120px;

  @media screen and (max-width: 750px) {
    height: auto;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
  font-size: 20px;
`;

export const Copyrights = styled.div`
  float: right;
  margin: 0;
  padding: 15px 0;
  color: white;
  font-size: 1rem;

  @media screen and (max-width: 499px) {
    padding: 0;
  }
`;

export const FooterListReferences = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 499px) {
    width: 300px;
    justify-content: center;
    padding: 0;
  }
`;

export const FooterItem = styled.li`
  height: 80px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  text-decoration: underline;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const FooterPoweredByLink = styled.a`
  color: #fff;
  justify-content: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;

  @media screen and (max-width: 965px) {
    margin-right: 15px;
    margin-bottom: 25px;
  }
`;

export const FooterPoweredByImage = styled.img`
  border-radius: 20px;
`;
