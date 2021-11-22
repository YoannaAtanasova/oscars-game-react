import React, {useState, useEffect} from 'react';
import { HeaderWrapper, MovieDetailsContainer, MovieDetailsHeader, 
        Poster, PosterImage, PosterWrapper, 
        TitleWrapper, Title, TitleLink, ReleaseDate, 
        HeaderIconsList, HeaderIconsListItem, MarkWatchedButton, HeaderIconsListItemText, MDBLink, MDBImage,
        SectionWrapper, SectionHeader, 
        OverviewBody, 
        NominationsContainer, NominationsList, Nomination,
        ScrollerWrapper, ScrollerCardList, ScrollerCard, ScrollerCardImageLink, ScrollerCardImage, ScrollerCardTitle, ScrollerCardSubtitle, NominationLink} from './styled/MovieDetailsElements';
import {GiPopcorn,GiInvisibleFace} from 'react-icons/gi';
import {FcFilmReel} from 'react-icons/fc';
import { GlobalColors, GlobalURLs } from '../Global';

function MovieDetails({movieId, title, releaseDate, poster, imdbId, overview, nominations, credits, usersWatched}) {
    const [usersCount, setUsersCount] = useState(0);

    useEffect(() => {
        getUsersCount();
    });

    const getUsersCount = async () => {
        return await fetch(`${process.env.REACT_APP_API_URL}/users`)
            .then((response) => response.json())
            .then((data) => setUsersCount(data.length));
      };

    return (
        <div>
            <MovieDetailsContainer>
                <MovieDetailsHeader>
                    <PosterWrapper>
                        <Poster>
                            <PosterImage src={GlobalURLs.TMDB_LARGE_IMAGE_URL.format(poster)}/>
                        </Poster>
                    </PosterWrapper>
                    <HeaderWrapper>
                        <TitleWrapper>
                            <Title>
                                <TitleLink href={"/movie/" + movieId} target="_newtab">{title}</TitleLink>
                            </Title>
                            <ReleaseDate>{releaseDate}</ReleaseDate>
                        </TitleWrapper>
                        <HeaderIconsList>
                            <HeaderIconsListItem>
                                <HeaderIconsListItemText>{Math.round((usersWatched.length/usersCount) * 100) + "%"}</HeaderIconsListItemText>
                            </HeaderIconsListItem>
                            <HeaderIconsListItem>
                                <HeaderIconsListItemText>{nominations.length}</HeaderIconsListItemText>
                            </HeaderIconsListItem>
                            <HeaderIconsListItem>
                                <MarkWatchedButton href="/" title="Mark as watched">
                                    <GiPopcorn size='3.8em' style={{ fill: "url(#gold-gradient)" }}/>
                                </MarkWatchedButton>
                            </HeaderIconsListItem>
                        </HeaderIconsList>
                        <MDBLink href={`${GlobalURLs.IMDB_URL}/title/${imdbId}`} title="IMDB" target="_newtab">
                            <MDBImage src={GlobalURLs.IMDB_LOGO_URL} />
                        </MDBLink>
                        <MDBLink href={`${GlobalURLs.TMDB_URL}/movie/${movieId}`} title="TMDB" target="_newtab">
                            <MDBImage src={GlobalURLs.TMDB_LOGO_URL}/> 
                        </MDBLink>
                    </HeaderWrapper>
                </MovieDetailsHeader>
                <SectionWrapper>
                    <SectionHeader>Overview</SectionHeader>
                    <OverviewBody>{overview}</OverviewBody>
                </SectionWrapper>
                <SectionWrapper>
                    <SectionHeader>Nominations</SectionHeader>
                    <NominationsContainer>
                        <NominationsList>
                        {nominations.map((nomination, index) => (
                            <Nomination key={index} >
                                <FcFilmReel /> &nbsp;
                                <NominationLink href={'/category/' + nomination.CategoryId}>{nomination.CategoryTtle}</NominationLink>
                            </Nomination>))}
                        </NominationsList>
                    </NominationsContainer>
                </SectionWrapper>
                <SectionWrapper>
                    <SectionHeader>Cast</SectionHeader>
                    <ScrollerWrapper>
                        <ScrollerCardList>
                        {credits.filter(credit => credit.IsCast).map((credit, index) =>(
                            <ScrollerCard key={index} >
                                <ScrollerCardImageLink>
                                    {credit.Image
                                    ? (<ScrollerCardImage src={GlobalURLs.TMDB_SMALL_IMAGE_URL.format(credit.Image)}/>)
                                    : (<GiInvisibleFace size='5em'/>)}
                                </ScrollerCardImageLink>
                                <ScrollerCardTitle>{credit.Name}</ScrollerCardTitle>
                                <ScrollerCardSubtitle>{credit.Role}</ScrollerCardSubtitle>
                            </ScrollerCard>))}
                        </ScrollerCardList>
                    </ScrollerWrapper>
                </SectionWrapper>
                <SectionWrapper>
                    <SectionHeader>Crew</SectionHeader>
                    <ScrollerWrapper>
                        <ScrollerCardList>
                        {credits.filter(credit => !credit.IsCast).map((credit, index) =>(
                            <ScrollerCard key={index} >
                                <ScrollerCardImageLink>
                                    {credit.Image
                                    ? (<ScrollerCardImage src={GlobalURLs.TMDB_SMALL_IMAGE_URL.format(credit.Image)}/>)
                                    : (<GiInvisibleFace color={GlobalColors.White} size='5em'/>)}
                                </ScrollerCardImageLink>
                                <ScrollerCardTitle>{credit.Name}</ScrollerCardTitle>
                                <ScrollerCardSubtitle>{credit.Role}</ScrollerCardSubtitle>
                            </ScrollerCard>))}
                        </ScrollerCardList>
                    </ScrollerWrapper>
                </SectionWrapper>
            </MovieDetailsContainer>
        </div>      
    )
}

export default MovieDetails;
