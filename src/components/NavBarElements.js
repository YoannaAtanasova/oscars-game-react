import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
    background: #000;
    height: 80px;
   /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    
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

export const NavLogo =styled(Link)`
    color: #fff;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
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
        color: #fff;
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
        background: #101522;
    }
`;

export const NavItem = styled.li`
    height: 80px;

    @media screen and (max-width:780px){
        width: 100%;
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
    display: flex;
    align-items: center;

    @media screen and (max-width:768px){
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
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