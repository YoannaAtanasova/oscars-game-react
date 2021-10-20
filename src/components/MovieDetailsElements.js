import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
    margin: 60px;
    width: auto;
    //max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    flex: 0 1 auto;
    flex-direction: column;
`;

 export const MovieDetailsHeader = styled.div`
    width: 100%;
    //max-width: 1000px;
    border-bottom: 1px solid #b69323;
    display: flex;
    flex-wrap: nowrap;
 `;

 export const PosterWrapper = styled.div`
    height: auto;
    border-width: 0;
    min-width: 300px;
    width: 300px;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 50px;
 `;

 export const Poster = styled.div`
    display: block;
    min-width: 300px;
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
    color: #fff;
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
    color: #b69323;
 `;

export const HeaderIconsList = styled.ul`
    margin-bottom: 20px;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const HeaderIconsListItem = styled.li`
    padding: 3px 0;
    margin-right: 20px;
    height: 100%;
    width: 80px;
    background-color: #262a2d;
    border-radius: 50%;
    border: 5px #c19b26;
    border-style: solid;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-content: center;
`;

export const HeaderIconsListItemText = styled.span`
    color: white;
    font-size: 2.0rem;
    font-weight: bold;
`;

export const MarkWatchedButton = styled.a`
    color: white;

    &:hover{
       color: #fde086;
    }
`;

export const MDBLink = styled.a`
    color: #fff;
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
    color: #b69323;
`;

export const OverviewBody = styled.p`
    display: inline-flex;
    align-items: center;
    align-content: center;
    font-size: 1.3rem;
    flex-wrap: wrap;
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
    background-color: #262a2d;
    color: #aba499;
   }

   &::-webkit-scrollbar-corner {
    background-color: #181a1b;
   }

   &::-webkit-scrollbar-thumb {
    background-color: #454a4d;
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
    border: 1px solid #b69323;
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
`;

export const ScrollerCardSubtitle = styled.p`
    padding-top: 10px;
    padding: 0 10px;
    font-size: 1em;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.9em;
    color: #b69323;
`;