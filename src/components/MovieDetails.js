import React from 'react'
import { HeaderWrapper, MovieDetailsContainer, MovieDetailsHeader, Poster, PosterImage, PosterWrapper, TitleWrapper, Title, TitleLink, ReleaseDate, List, ListItem, MarkWatchedButton, ListItemText } from './MovieDetailsElements'
import {GiPopcorn} from 'react-icons/gi'

function MovieDetails({imageId, title, releaseDate, imageUrl}) {
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
                                <TitleLink href={"/movie/" + imageId}>{title}</TitleLink>
                            </Title>
                            <ReleaseDate>{releaseDate}</ReleaseDate>
                        </TitleWrapper>
                        <List>
                            <ListItem>
                                <ListItemText>80%</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>2</ListItemText>
                            </ListItem>
                            <ListItem>
                                <MarkWatchedButton href="/" title="Mark as watched">
                                    <GiPopcorn size='3.8em'/>
                                </MarkWatchedButton>
                            </ListItem>
                        </List>
                    </HeaderWrapper>
                </MovieDetailsHeader>
            </MovieDetailsContainer>
        </div>
    )
}

export default MovieDetails
