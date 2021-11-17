import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    z-index: 10;
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const FooterContent = styled.div`
    display: flex;
    justify-content: flex-start;
    z-index: 1;
    margin-left: 20rem;
    font-size: 20px;
`;

export const CopyRights = styled.div`
    float: right;
    margin: 0;
    padding: 15px 0;    
    color: white;
`;

export const FooterListReferences = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
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
`;

export const FooterPoweredByLink = styled.a`
    color: #fff;
    justify-content: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    margin-right: 24px;
`;

export const FooterPoweredByImage = styled.img`
    border-radius: 20px;
`;