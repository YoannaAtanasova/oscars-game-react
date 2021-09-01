import styled from 'styled-components';

export const Page = styled.div`
    padding: 50px 150px;
    color: white;
    background-color: #060606;
    
    @media screen and (max-width: 960px){
        padding: 20px 50px;
    }
`;

export const PageBody = styled.div`
    padding: 35px 35px;
    background-color: #262a2d;
    border-radius: 50px;
`;

export const BackgroundBanner = styled.div`
    border-color: initial;
    border: 0;
    height: 80vh;
    margin: 0;
    display: flex;
    overflow: hidden;
    position: relative;
    max-height: 1000px;
    align-items: center;
    background-size: cover;
    background-position: left;
    background-image: url("/Oscars_SocialBanners_4.jpg");
    // shrink -> opacity 0.3 and text over image in the center
    opacity: 0.8;
    transform: translate3d(0px, 0px, 0px);
    transition: 0.8s all ease;

    @media screen and (max-width: 1400px){
        background-position: right;
        opacity: 0.3;
     }

     @media screen and (max-width: 850px){
        background-image: url("/Oscars_SocialBanners_2.jpg");
        background-position: center;
        opacity: 0.3;
     }
`;

export const Header = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;

     @media screen and (min-width: 1200px){
         max-width: 1140px;
     }

     @media screen and (min-width: 992px){
         max-width: 960px;
     }

     @media screen and (min-width: 768px){
         max-width: 720px;
     }

     @media screen and (min-width: 576px){
         max-width: 540px;
     }
`;