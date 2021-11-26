import styled from 'styled-components';
import { GlobalColors } from '../../Global';

export const MoviesContainer = styled.div`
    width: 1100; //calc(100vw - 80px - 268px);
    max-width: 1500;//calc(var(--maxPrimaryPageWidth) - 80px - 268px);
    display: flex;
    flex-wrap: wrap;
    flex: 0 1 auto;
`;

export const Card = styled.div`
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    border: 1px solid;
    border-color: ${GlobalColors.OscarsGold};
    border-radius: 20px;
    overflow: hidden;
    margin: 20px 30px;
    width: 180;
    max-width: 180px;
    transition: box-shadow 0.4s;
    /*width: calc((100vw - 80px - 260px - (var(--discoverColumnPadding) * var(--numberOfDiscoverColumns))) / var(--numberOfDiscoverColumns));
    max-width: calc((var(--maxPrimaryPageWidth) - 80px - 260px - (var(--discoverColumnPadding) * var(--numberOfDiscoverColumns))) / var(--numberOfDiscoverColumns)); */

    &:hover {
        box-shadow: 6px 8px #181b1e;
    }
`;

export const CardImageContainer = styled.div`
    width: 100%;
    height: 270px;
    max-width: 180px;
    width: 180px;
    border-bottom: 1px solid;
    border-color: ${GlobalColors.OscarsGold};
    /*height: calc((100vw - 80px - 260px - (var(--discoverColumnPadding) * var(--numberOfDiscoverColumns))) / var(--numberOfDiscoverColumns) * 1.5);
    max-height: calc((var(--maxPrimaryPageWidth) - 80px - 260px - (var(--discoverColumnPadding) * var(--numberOfDiscoverColumns))) / var(--numberOfDiscoverColumns) * 1.5); */
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
`;

export const ImageLink = styled.a`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const Image = styled.img`
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0;
    outline: none;
    z-index: 1;
    opacity: ${props => props.isWinner ? 0.5 : 1};
`;

export const WinnerIcon = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0;
    outline: none;
    z-index: 2;
`;

export const MarkWatchedWrapper = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 4;
    background: ${props => props.color};
    border-radius: 50%;
    border: 1px;
    border-color: ${GlobalColors.GoldBorder};
    border-style: solid;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    padding: 2px 2px;

    &:hover {
        background: ${GlobalColors.LightGray};
    }
`;

export const MarkWatchedButton = styled.a`
    color: linear-gradient(${GlobalColors.White} 0%, ${GlobalColors.OscarsGold} 90%);
`;
export const MarkVotedWrapper = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 4;
    background: ${props => props.color};
    border-radius: 50%;
    border: 1px;
    border-color: ${GlobalColors.GoldBorder};
    border-style: solid;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    padding: 2px 2px;

    &:hover {
        background: ${GlobalColors.LightGray};
    }
`;

export const MarkVotedButton = styled.a`
    color: linear-gradient(${GlobalColors.White} 0%, ${GlobalColors.OscarsGold} 90%);
`;

export const CardContent = styled.div`
    width: 100%;
    min-height: 75px;
    padding: 25px 10px 12px 10px;
    position: relative;
    white-space: normal;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    align-items: flex-start;
`;

export const Title = styled.h2`
    font-size: 1em;
    font-weight: 700;
    margin: 0;
    width: 100%;
    word-wrap: normal;
    overflow-wrap: break-word;
`;

export const TitleLink = styled.a`
    color: ${GlobalColors.White};
    text-decoration: none;
`;

export const SubTitle = styled.p`
    font-size: 1em;
    font-weight: 400;
    margin: 0;
    padding: 0;
    color: ${GlobalColors.WhiteGray};
`;