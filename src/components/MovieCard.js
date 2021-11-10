import React, {useEffect, useState} from 'react';
import { Card, CardContent, CardImageContainer, 
    Image, ImageLink, ImageWrapper, 
    MarkWatchedWrapper, MarkWatchedButton,
    MarkVotedWrapper, MarkVotedButton, 
    Title, TitleLink, ReleaseDate} from './MovieCardElements';
import { PageBody } from './PageElements';
import MovieDetails from './MovieDetails';
import {GiPopcorn} from 'react-icons/gi';
import {MdHowToVote} from 'react-icons/md';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../App.css'
import { GlobalColors } from '../Global';

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
        <svg viewBox="0 0 36 36" width="28" height="28" data-testid="close-icon" fill={GlobalColors.OscarsGold}>
            <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path>
        </svg>);

    function handleWatchedButton() {
        if (isWatched) {
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

    function handleVotedButton() {
        if (isVoted) {
            fetch(`${process.env.REACT_APP_API_URL}/votedMovies/${movieId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => setMovieIsVotedFor(false))
            .catch(err => console.log(err));
        } else {
            fetch(`${process.env.REACT_APP_API_URL}/votedMovies`, {
                method: 'POST',
                body: JSON.stringify({
                    movieId: movieId,
                    userId: currentUser
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => setMovieIsVotedFor(true))
            .catch(err => console.log(err));
        };
    };

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
                        <MarkVotedWrapper color={movieIsVotedFor ? '#444d53' : '#262a2d'}>
                            <MarkVotedButton onClick={handleVotedButton} title="Vote for this movie">
                                <MdHowToVote size='1.8em' style={{ fill: "url(#gold-gradient)" }}/>
                            </MarkVotedButton>
                        </MarkVotedWrapper>)
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
