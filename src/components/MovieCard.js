import React from 'react';
import { Card, CardContent, CardImageContainer, Image, ImageLink, ImageWrapper, MarkWarchedWrapper, MarkWatchedButton, Title, TitleLink, ReleaseDate } from './MovieCardElements';

function MovieCard() {
    return (
        <div>
            <Card>
                <CardImageContainer>
                    <ImageWrapper>
                        <ImageLink>
                            <Image src="https://www.themoviedb.org/t/p/w220_and_h330_face/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg"/>
                        </ImageLink>
                    </ImageWrapper>
                    <MarkWarchedWrapper>
                        <MarkWatchedButton/>
                    </MarkWarchedWrapper>
                </CardImageContainer>
                <CardContent>
                    <Title>
                        <TitleLink>Cool Title</TitleLink>
                    </Title>
                    <ReleaseDate>11 Aug 2021</ReleaseDate>
                </CardContent>
            </Card>
        </div>
    )
}

export default MovieCard
