import styled from 'styled-components';
import { GlobalColors } from '../../Global';

export const MovieDetailsContainer = styled.div`
    margin: 60px;
    width: auto;
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    flex: 0 1 auto;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 1110px){
        margin: 10px;
        width: 750px;
     }

    @media screen and (max-width: 880px){
        width: 600px;
     }

    @media screen and (max-width: 740px){
        width: 350px;
     }

    @media screen and (max-width: 499px){
        width: 300px;
     }
`;

 export const MovieDetailsHeader = styled.div`
    width: 100%;
    max-width: 800px;
    border-bottom: 1px solid;
    border-color: ${GlobalColors.OscarsGold};
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 880px){
        justify-content: center;
     }

     @media screen and (max-width: 499px){
        padding-top: 35px;
     }
 `;

 export const PosterWrapper = styled.div`
    height: auto;
    border-width: 0;
    min-width: 150px;
    width: 300px;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 50px;
 `;

 export const Poster = styled.div`
    display: block;
    min-width: 150px;
    width: 300px;
    height: 450px;
    position: relative;
    top: 0;
    left: 0;
 `;

 export const PosterImage = styled.img`
    display: block;
    width: 100%;
    min-width: 100%;
    height: 100%;
    min-height: 100%;
    border-width: 0px;
    outline: none;
 `;

 export const HeaderWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: column;
    align-content: center;
    box-sizing: border-box;
    padding-left: 50px;
    margin-bottom: 60px;
 `;

 export const TitleWrapper = styled.div`
    width: 100%;
    margin-bottom: 24px;
    display: flex;
    flex-wrap: wrap;
 `;

 export const Title = styled.h2`
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 3.2rem;
 `;

 export const TitleLink = styled.a`
    font-weight: 700;
    color: ${GlobalColors.White};
    text-decoration: none;
 `;

 export const ReleaseDate = styled.span`
    display: inline-flex;
    white-space: nowrap;
    align-items: center;
    align-content: center;
    padding: 0.06em 4px 0.15em 4px !important;
    line-height: 1;
    border-radius: 2px;
    margin-right: 7px;
    font-size: 1.5rem;
    color: ${GlobalColors.OscarsGold};
 `;

export const HeaderIconsList = styled.ul`
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    list-style-type: none;
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
`;

export const HeaderIconsListItem = styled.li`
    margin-right: 20px;
    margin-bottom: 10px;
    height: 100px;
    width: 100px;
    background-color: ${GlobalColors.MidGray};
    border-radius: 50%;
    border: 5px;
    border-color: ${GlobalColors.GoldBorder};
    border-style: solid;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
`;

export const HeaderIconsListItemText = styled.span`
    color: ${GlobalColors.White};
    font-size: 1.5rem;
    font-weight: bold;
`;

export const HeaderIconsListItemSubText = styled.span`
    color: ${GlobalColors.White};
    font-size: 0.8rem;
    font-weight: bold;
`;

export const MarkWatchedButton = styled.a`
    color: ${GlobalColors.White};
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    background: ${props => props.isWatched ? 'rgba(68, 77, 83, 1)' : 'none'};
    border-radius: ${props => props.isWatched ? '100px' : 'none'};
    
    &:hover {
        background: ${props => props.isWatched ? 'rgba(38, 42, 45, 1)' : 'rgba(68, 77, 83, 1)'};
        border-radius: 100px;
    }
`;

export const MDBLinkWrapper = styled.div`
    display: flex;
`;

export const MDBLink = styled.a`
    color: ${GlobalColors.White};
    justify-content: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 5px;
    margin-top: 30px;
    margin-right: 24px;
    max-width: 200px;
`;

export const MDBImage = styled.img`
    max-width: 100px;
    width: 100px;
`;

export const SectionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: center;
    box-sizing: border-box;
    margin: 20px 20px 0px 20px;
    width: 95%;
`;

export const SectionHeader = styled.h2`
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 2.2rem;
    font-weight: bold;
    color: ${GlobalColors.OscarsGold};
`;

export const OverviewBody = styled.p`
    display: inline-flex;
    align-items: center;
    align-content: center;
    font-size: 1.3rem;
    flex-wrap: wrap;
    color: white;
`;

export const NominationsContainer = styled.div`
   margin-top: 10px;
   margin-bottom: 10px;
`;

export const NominationsList = styled.ul`
    margin: 0;
    width: 100%;
    list-style-type: none;
`;

export  const Nomination = styled.li`
   margin: 10px;
   font-size: 1.6em;
`;

export const NominationLink = styled.a`
    color: ${GlobalColors.White};
    text-decoration: none;
 `;

export const ScrollerWrapper = styled.div`
    position: relative;
    margin-top: 10px;
    margin-bottom: 20px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const ScrollerCardList = styled.ol`
    overflow-y: hidden;
    overflow-x: scroll;
    margin-left: -10px;
    margin-top: -10px;
    padding-bottom: 10px;
    list-style-type: none;
    list-style-position: inside;
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    top: 0;
    left: 0;

    &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
    background-color: ${GlobalColors.MidGray};
    color: ${GlobalColors.LightGray};
   }

   &::-webkit-scrollbar-corner {
    background-color: ${GlobalColors.DarkGray};
   }

   &::-webkit-scrollbar-thumb {
    background-color: ${GlobalColors.LightGray};
    border-radius: 20px;
   }

   &:-webkit-scrollbar-track {
    background-image: initial;
    background-color: transparent;
   }
`;

export const ScrollerCard = styled.li`
    margin-top: 10px;
    margin-bottom: 15px;
    margin-left: 10px;
    margin-right: 4px;
    border: 1px solid;
    border-color: ${GlobalColors.OscarsGold};
    padding-bottom: 10px;
    border-radius: 30px;
    overflow: hidden;
    min-width: 140px;
    width: 140px;
`;

export const ScrollerCardImageLink = styled.a`
    min-width: 138px;
    width: 138px;
    height: 175px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
`;

export const ScrollerCardImage = styled.img`
    width: 100%;
    min-width: 100%;
    height: 100%;
    min-height: 100%;
`;

export const ScrollerCardTitle = styled.p`
    padding-top: 10px;
    padding: 0 10px;
    font-size: 1em;
    margin: 10px 0 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
    color: ${GlobalColors.White};
`;

export const ScrollerCardSubtitle = styled.p`
    padding-top: 10px;
    padding: 0 10px;
    font-size: 1em;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.9em;
    color: ${GlobalColors.OscarsGold};
`;