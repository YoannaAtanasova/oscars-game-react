import styled from 'styled-components';
import { GlobalColors } from '../../Global';

export const Rank = styled.h4`
    color: ${GlobalColors.White};
    font-size: 1.2em;
    margin: 0;
    padding: 0 10px;

    @media screen and (max-width: 710px){
        font-size: 1em;
     }
`;

export const UserDisplayName = styled.h4`
    color: ${GlobalColors.White};
    font-size: 1.2em;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 710px){
        font-size: 1em;
     }

     @media screen and (max-width: 400px){
        font-size: 0.75em;
     }
`;

export const ScoreWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    box-sizing: border-box;
`;

export const ScoreMeter = styled.div`
    margin: 7px;
    width: 100%;
    height: 8px;
    display: flex;
    align-items: center;
    align-content: center;
`;

export const ScoreGauge = styled.div`
    height: 100%;
    border-radius: 4px;
    background: linear-gradient(to right, ${GlobalColors.OscarsLightGold} 0%, ${GlobalColors.OscarsGold} 100%);
    width: ${props => props.width};
    margin-right: 10px;

    @media screen and (max-width: 710px){
        width: 0;
        margin: 0;
     }
`;

export const ScoreHeader = styled.h4`
    color: ${GlobalColors.White};
    width: 170px;
    font-size: 0.9em;
    font-weight: normal;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 710px){
        font-size: 0.8em;
     }

    @media screen and (max-width: 400px){
        width: auto;
     }
`;