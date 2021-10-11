import styled from 'styled-components';

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
    border: 1px solid #b69323;
    border-radius: 20px;
    overflow: hidden;
    margin: 30px 30px;
    width: 180;
    max-width: 180px;
    /*width: calc((100vw - 80px - 260px - (var(--discoverColumnPadding) * var(--numberOfDiscoverColumns))) / var(--numberOfDiscoverColumns));
    max-width: calc((var(--maxPrimaryPageWidth) - 80px - 260px - (var(--discoverColumnPadding) * var(--numberOfDiscoverColumns))) / var(--numberOfDiscoverColumns)); */
`;

export const CardImageContainer = styled.div`
    width: 100%;
    height: 270px;
    max-width: 180px;
    border-bottom: 1px solid #b69323;
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
    display: inline-block;
    width: 100%;
    height: 100%;
`;

export const Image = styled.img`
    display: inline-block;
    width: 100%;
    height: 100%;
    border: 0;
    outline: none;
`;

export const MarkWarchedWrapper = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 4;
    opacity: 0.8;
    background: #262a2d;
    border-radius: 20px;

    &:hover{
        opacity: 1;
        background: #181b1e;
    }
`;

export const MarkWatchedButton = styled.a`
    color: #b69323;

    &:hover{
        color: #a78b31;
    }
`;

export const CardContent = styled.div`
    width: 100%;
    padding: 20px 10px 12px 10px;
    position: relative;
    white-space: normal;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    align-items: flex-start;
`;

export const Title = styled.div`
    font-size: 1em;
    margin: 0;
    width: 100%;
    word-wrap: normal;
    overflow-wrap: break-word;
`;

export const TitleLink = styled.a`
    font-weight: 700;
    color: #fff;
`;

export const ReleaseDate = styled.p`
    font-size: 1em;
    margin: 0;
    padding: 0;
    color: #e8e6e399;
`;

export const NumOfNominations = styled.div``; 