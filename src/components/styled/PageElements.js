import styled from 'styled-components';
import { GlobalColors } from '../../Global';

export const Page = styled.div`
    padding: ${props => props.padding ? props.padding : '50px 150px'};
    color: ${GlobalColors.White};
    background-color: ${GlobalColors.DarkGray};
    padding-bottom: 200px;

    @media screen and (max-width: 1110px){
        padding-right: 20px;
        padding-left: 20px;
     }
`;

export const PageBody = styled.div`
    padding: 35px 35px;
    background-color: ${GlobalColors.MidGray};
    border-radius: 50px 0px 50px 0px;

    @media screen and (max-width: 499px){
        padding: 35px 5px;
     }
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
    transition: 0.5s all ease;
    align-content: center;
    opacity: 1;  

    @media screen and (max-width: 1400px){
        background-position: right;

        &:before {
            content: "";
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            background-color: rgba(0,0,0,0.75);
        }
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
    position: relative;
`;

export const Header = styled.div`
    color: ${GlobalColors.OscarsGold};
    font-size: 100px;

    @media screen and (max-width: 499px){
        font-size: 70px;
     }
`;

export const SubHeader = styled.div`
    color: ${GlobalColors.White};
    font-size: 80px;

    @media screen and (max-width: 499px){
        font-size: 50px;
     }
`;

export const GameInformation = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    font-size: 30px;
    border: 5px solid;
    border-color: ${GlobalColors.OscarsGold};
    border-radius: 30px;
    color: ${GlobalColors.White};
    padding: 15px;
    margin: 15px;

    @media screen and (max-width: 499px){
        font-size: 20px;
     }
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
    color: ${GlobalColors.OscarsGold};
 `;

 export const TitleLink = styled.a`
    font-weight: 700;
    color: ${GlobalColors.OscarsGold};
    text-decoration: none;
 `;

 export const Preview = styled.pre`
    white-space: pre-wrap;
    overflow-x: auto;
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    line-height: 1.42857143;
    color: ${GlobalColors.White};
    word-break: break-all;
    word-wrap: break-word;
    background-color: ${GlobalColors.LightGray};
    border: 1px solid #ccc;
    border-radius: 4px;
 `;