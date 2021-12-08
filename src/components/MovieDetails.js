import React, {useState, useEffect} from 'react';
import { HeaderWrapper, MovieDetailsContainer, MovieDetailsHeader, 
        Poster, PosterImage, PosterWrapper, 
        TitleWrapper, Title, TitleLink, ReleaseDate, 
        HeaderIconsList, HeaderIconsListItem, MarkWatchedButton, HeaderIconsListItemText, MDBLink, MDBImage,
        SectionWrapper, SectionHeader, 
        OverviewBody, 
        NominationsContainer, NominationsList, Nomination,
        ScrollerWrapper, ScrollerCardList, ScrollerCard, ScrollerCardImageLink, ScrollerCardImage, ScrollerCardTitle, ScrollerCardSubtitle, NominationLink, MDBLinkWrapper, HeaderIconsListItemSubText} from './styled/MovieDetailsElements';
import {GiPopcorn,GiInvisibleFace} from 'react-icons/gi';
import {FcFilmReel} from 'react-icons/fc';
import { GlobalColors, GlobalStorageKeys, GlobalURLs } from '../Global';

function MovieDetails({movieId, title, releaseDate, poster, imdbId, overview, nominations, credits, usersWatched, isWatched}) {
    const [usersCount, setUsersCount] = useState(0);
    const [movieIsWatched, setMovieIsWatched ] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        setCurrentUser(sessionStorage.getItem(GlobalStorageKeys.USER_ID));
        setMovieIsWatched(isWatched);
        getUsersCount();
    }, [isWatched]);

    function handleWatchedButton() {
        if (!JSON.parse(sessionStorage.getItem(GlobalStorageKeys.USER_IS_LOGGED_IN))) return;
        
        if (movieIsWatched) {
            fetch(`${process.env.REACT_APP_API_URL}/watchedMovies/${movieId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => setMovieIsWatched(false))
            .catch(err => console.log(err));
        } else {
            fetch(`${process.env.REACT_APP_API_URL}/watchedMovies`, {
                method: 'POST',
                body: JSON.stringify({
                    movieId: movieId,
                    userId: currentUser
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => setMovieIsWatched(true))
            .catch(err => console.log(err));
        };
    };

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
                                <HeaderIconsListItemSubText>Users watched</HeaderIconsListItemSubText>
                            </HeaderIconsListItem>
                            <HeaderIconsListItem>
                                <HeaderIconsListItemText>{nominations.length}</HeaderIconsListItemText>
                                <HeaderIconsListItemSubText>Nominations</HeaderIconsListItemSubText>
                            </HeaderIconsListItem>
                            <HeaderIconsListItem>
                                <MarkWatchedButton onClick={handleWatchedButton} title="Mark as watched" isWatched={movieIsWatched}>
                                    <GiPopcorn size='3.8em' style={{ fill: "url(#gold-gradient)", background: "transparent" }}/>
                                </MarkWatchedButton>
                            </HeaderIconsListItem>
                        </HeaderIconsList>
                        <MDBLinkWrapper>
                            <MDBLink href={`${GlobalURLs.IMDB_URL}/title/${imdbId}`} title="IMDB" target="_newtab">
                                <MDBImage src={GlobalURLs.IMDB_LOGO_URL} />
                            </MDBLink>
                            <MDBLink href={`${GlobalURLs.TMDB_URL}/movie/${movieId}`} title="TMDB" target="_newtab">
                                <MDBImage src={GlobalURLs.TMDB_LOGO_URL}/> 
                            </MDBLink>
                        </MDBLinkWrapper>                        
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
