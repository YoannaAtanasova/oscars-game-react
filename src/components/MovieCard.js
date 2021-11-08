import React, {useEffect, useState} from 'react';
import { Card, CardContent, CardImageContainer, 
    Image, ImageLink, ImageWrapper, 
    MarkWatchedWrapper, MarkWatchedButton, 
    Title, TitleLink, ReleaseDate } from './MovieCardElements';
import { PageBody } from './PageElements';
import MovieDetails from './MovieDetails';
import {GiPopcorn} from 'react-icons/gi';
import {MdHowToVote} from 'react-icons/md';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../App.css'

function MovieCard({movieId, imageId, title, releaseDate, imageUrl, imdbId, overview, nominations, credits, usersWatched, showWatchedButton, isWatched, isVoted, currentUser}) {
    const [open, setOpen] = useState(false);

    const [movieIsWatched, setMovieIsWatched ] = useState(false);
    const [movieIsVotedFor, setMovieIsVotedFor ] = useState(false);

    useEffect(() => {
        setMovieIsWatched(isWatched);
        setMovieIsVotedFor(isVoted);
    }, [isWatched, isVoted]);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const closeIcon = (
        <svg viewBox="0 0 36 36" width="28" height="28" data-testid="close-icon" fill="#b69323">
            <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path>
        </svg>);

    function handleWatchedButton() {
        if (isWatched) {
            fetch(`/api/user-information/${currentUser}?_expand.WatchedMovies?id=${movieId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => setMovieIsWatched(false))
            .catch(err => console.log(err));
        } else {
            fetch(`/api/user-information/${currentUser}?_expand.WatchedMovies?id=${movieId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => setMovieIsWatched(true))
            .catch(err => console.log(err));
        };
    }

    return (
        <div>
            <Card>
                <CardImageContainer>
                    <ImageWrapper>
                        <ImageLink onClick={onOpenModal}>
                            <Image src={imageUrl}/>
                        </ImageLink>
                    </ImageWrapper>
                    {showWatchedButton ? (
                        <MarkWatchedWrapper color={movieIsWatched ? '#444d53' : '#262a2d'}>
                            <MarkWatchedButton onClick={handleWatchedButton} title="Mark as watched">
                                <GiPopcorn size='1.8em' style={{ fill: "url(#gold-gradient)" }}/>
                            </MarkWatchedButton>
                        </MarkWatchedWrapper>
                        ) : (
                        <MarkWatchedWrapper color={isVoted ? '#444d53' : '#262a2d'}>
                            <MarkWatchedButton onClick={handleWatchedButton} title="Mark as watched">
                                <MdHowToVote size='1.8em' style={{ fill: "url(#gold-gradient)" }}/>
                            </MarkWatchedButton>
                        </MarkWatchedWrapper>)
                    }
                </CardImageContainer>
                <CardContent>
                    <Title>
                        <TitleLink href={"/movie/" + imageId} target="_newTab"> {title} </TitleLink>
                    </Title>
                    <ReleaseDate>{releaseDate}</ReleaseDate>
                </CardContent>
            </Card>
            <Modal open={open} onClose={onCloseModal} center classNames={{modal:'movieModal'}} closeIcon={closeIcon}>
                <PageBody>
                        <MovieDetails
                            imageId={imageId}
                            title={title}
                            releaseDate={releaseDate}
                            imageUrl={imageUrl} 
                            imdbId={imdbId}
                            overview={overview}
                            nominations={nominations}
                            credits={credits}
                            usersWatched={usersWatched}/>
                </PageBody>
            </Modal>
        </div>
    )
}

export default MovieCard
