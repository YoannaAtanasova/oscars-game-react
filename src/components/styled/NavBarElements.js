import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { GlobalColors } from '../../Global';

export const Nav = styled.nav`
    background: #181b1e;
    height: 80px;
   /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    border-width: 0px 0px 2px 0px;
    border-style: solid;
    border-color: ${GlobalColors.OscarsGold};
    
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavBarContainer=styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
`;

export const NavLogoLink =styled(Link)`
    color: ${GlobalColors.White};
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const NavLogo = styled.img`
    max-height: 50px;
`;

export const BurgerMenu = styled.div`
    display: none;

    @media screen and (max-width: 780px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${GlobalColors.White};
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width:780px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 64px;
        left: ${({click}) => (click ? 0 : '-110%')};
        padding: 0;
        opacity: 1;
        transition: all 0.5s ease;
        background: ${GlobalColors.MidGray};
    }
`;

export const DropDownWrapper = styled.div`
    display: none;
    position: absolute;
    background-color: #181b1e;
    border: #b69323 solid;
    border-width: 0 2px 2px 2px;
`;

export const NavItem = styled.li`
    height: 80px;

    @media screen and (max-width:780px){
        width: 100%;
    }

    &:hover ${DropDownWrapper} {
            display: block;
  }
`;

export const NavLink =styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    pointer-events: ${props => props.isdisabled ? 'none' : 'auto'};

    &.active{
        border-bottom: 3px solid #01bf71;
    }

    @media screen and (max-width:780px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
    }
`;

export const NavBtn = styled.nav`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;

    @media screen and (max-width:768px){
        display: none;
        overflow: visible;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background: #b69323;
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }    
`;

export const DropDownList = styled.ul`
    align-items: center;
    list-style: none;
    text-align: center;
    justify-content: center;
    padding-inline-start: 0px;
`;

export const DropDownItem = styled.li`
    height: 50px;

    @media screen and (max-width:780px){
        width: 100%;
    }
`;