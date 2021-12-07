import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    z-index: 10;
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 200px;
    margin-top: -120px;   

    @media screen and (max-width: 750px){
        height: 310px;
     }
`;

export const FooterContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    z-index: 1;
    margin-left: 20rem;
    font-size: 20px;

    @media screen and (max-width: 1400px){
        margin-left: 10rem;
     }

    @media screen and (max-width: 810px){
        margin-left: 5rem;
     }

     @media screen and (max-width: 499px){
        margin-left: 0rem;
        justify-content: center;
     }
`;

export const CopyRights = styled.div`
    float: right;
    margin: 0;
    padding: 15px 0;    
    color: white;

    @media screen and (max-width: 499px){
        padding: 0;
     }
`;

export const FooterListReferences = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 499px){
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
    margin-left: 24px;
    margin-bottom: 5px;
    text-decoration: underline;

    &.active{
        border-bottom: 3px solid #01bf71;
    }

    @media screen and (max-width: 965px){
        margin-left: 15px;
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

    @media screen and (max-width: 965px){
        margin-right: 15px;
        margin-bottom: 25px;
     }
`;

export const FooterPoweredByImage = styled.img`
    border-radius: 20px;
`;