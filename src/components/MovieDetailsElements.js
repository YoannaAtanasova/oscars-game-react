import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
    margin: 60px;
    width: auto;
    //max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    flex: 0 1 auto;
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

export const List = styled.ul`
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

export const ListItem = styled.li`
    padding: 3px 0;
    margin-right: 20px;
    height: 100%;
    width: 80px;
    background-color: #262a2d;
    border-radius: 50%;
    border: 10px #c19b26;
    border-style: solid;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-content: center;
`;

export const ListItemText = styled.span`
    color: white;
    font-size: 2.0rem;
    font-weight: bold;
`;

export const MarkWatchedButton = styled.a`
    color: white;
`;