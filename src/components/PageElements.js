import styled from 'styled-components';

export const Page = styled.div`
    padding: ${props => props.padding ? props.padding : '50px 150px'};
    color: white;
    background-color: #181b1e;
    
    @media only screen and (width: 1000px){
        padding: 20px 50px;
    }
`;

export const PageBody = styled.div`
    padding: 35px 35px;
    background-color: #262a2d;
    border-radius: 50px 0px 50px 0px;
`;

export const Paragraph = styled.p`
    font-size: 20px;
`;

export const BackgroundBanner = styled.div`
    border-color: initial;
    border: 0;
    height: 80vh;
    margin: 0;
    display: grid;
    overflow: hidden;
    position: relative;
    max-height: 1000px;
    align-items: center;
    background-image: url("/Oscars_SocialBanners_4.jpg");
    background-size: cover;
    background-position: left;
    transform: translate3d(0px, 0px, 0px);
    transition: 0.8s all ease;
    align-content: center;
    opacity: 0.8;

    @media screen and (max-width: 1400px){
        background-position: right;
     }

     @media screen and (max-width: 850px){
        background-image: url("/Oscars_SocialBanners_2.jpg");
        background-position: center;
     }
`;

export const Banner = styled.div`
    margin-left: 45px;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    display: grid;
    align-content: center;
    align-items: center;
    justify-items: center;

    @media screen and (max-width: 1400px){
    
    }

     @media screen and (max-width: 850px){
        
     }
`;

export const Header = styled.div`
    color: #c19b26;
    font-size: 100px;
`;

export const SubHeader = styled.div`
    color: white;
    font-size: 80px;
`;

export const GameInformation = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    font-size: 30px;
    border: 5px solid #b69323;
    border-radius: 30px;
    color: white;
    padding: 15px;
    margin: 15px;
`;

export const TitleWrapper = styled.div`
    width: 100%;
    margin-bottom: 24px;
    margin-left: 24px;
    display: flex;
    flex-wrap: wrap;
 `;

 export const Title = styled.h2`
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 3.2rem;
    color: #b69323;
 `;

 export const TitleLink = styled.a`
    font-weight: 700;
    color: #b69323;
    text-decoration: none;
 `;