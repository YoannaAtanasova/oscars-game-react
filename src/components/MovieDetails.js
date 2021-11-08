import React, {useState, useEffect} from 'react';
import { HeaderWrapper, MovieDetailsContainer, MovieDetailsHeader, 
        Poster, PosterImage, PosterWrapper, 
        TitleWrapper, Title, TitleLink, ReleaseDate, 
        HeaderIconsList, HeaderIconsListItem, MarkWatchedButton, HeaderIconsListItemText, MDBLink, MDBImage,
        SectionWrapper, SectionHeader, 
        OverviewBody, 
        NominationsContainer, NominationsList, Nomination,
        ScrollerWrapper, ScrollerCardList, ScrollerCard, ScrollerCardImageLink, ScrollerCardImage, ScrollerCardTitle, ScrollerCardSubtitle, NominationLink} from './MovieDetailsElements';
import {GiPopcorn,GiInvisibleFace} from 'react-icons/gi';
import {FcFilmReel} from 'react-icons/fc';

function MovieDetails({imageId, title, releaseDate, imageUrl, imdbId, overview, nominations, credits, usersWatched}) {
    const [usersCount, setUsersCount] = useState(0);

    useEffect(() => {
        getUsersCount();
    })

    const getUsersCount = async () => {
        return await fetch("http://localhost:3030/users")
            .then((response) => response.json())
            .then((data) => setUsersCount(data.length));
      };

    return (
        <div>
            <MovieDetailsContainer>
                <MovieDetailsHeader>
                    <PosterWrapper>
                        <Poster>
                            <PosterImage src={imageUrl}/>
                        </Poster>
                    </PosterWrapper>
                    <HeaderWrapper>
                        <TitleWrapper>
                            <Title>
                                <TitleLink href={"/movie/" + imageId} target="_newtab">{title}</TitleLink>
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
                        <MDBLink href={"https://www.imdb.com/title/" + imdbId} title="IMDB" target="_newtab">
                            <MDBImage src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png" />
                        </MDBLink>
                        <MDBLink href={"http://www.themoviedb.org/movie/" + imageId} title="TMDB" target="_newtab">
                            <MDBImage src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"/> 
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
                                    ? (<ScrollerCardImage src={credit.Image}/>)
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
                                    ? (<ScrollerCardImage src={credit.Image}/>)
                                    : (<GiInvisibleFace color="white" size='5em'/>)}
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
