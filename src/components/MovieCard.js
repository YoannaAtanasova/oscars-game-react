import React from 'react';
import { Card, CardContent, CardImageContainer, Image, ImageLink, ImageWrapper, MarkWarchedWrapper, MarkWatchedButton, Title, TitleLink, ReleaseDate } from './MovieCardElements';
import {GiPopcorn} from 'react-icons/gi'

function MovieCard({title, releaseDate, imageUrl}) {
    return (
        <div>
            <Card>
                <CardImageContainer>
                    <ImageWrapper>
                        <ImageLink>
                            <Image src={imageUrl}/>
                        </ImageLink>
                    </ImageWrapper>
                    <MarkWarchedWrapper>
                        <MarkWatchedButton href="/" title="Mark as watched">
                            <GiPopcorn size='1.8em'/>
                        </MarkWatchedButton>
                    </MarkWarchedWrapper>
                </CardImageContainer>
                <CardContent>
                    <Title>
                        <TitleLink>{title}</TitleLink>
                    </Title>
                    <ReleaseDate>{releaseDate}</ReleaseDate>
                </CardContent>
            </Card>
        </div>
    )
}

export default MovieCard
