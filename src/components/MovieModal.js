import React from 'react';
import { PageBody } from './styled/PageElements';
import MovieDetails from './MovieDetails';
import { GlobalColors } from '../Global';
import { Modal } from 'react-responsive-modal';

function MovieModal({open, onClose, movie, isWatched}) {
    const closeIcon = (
        <svg viewBox="0 0 36 36" width="28" height="28" data-testid="close-icon" fill={GlobalColors.OscarsGold}>
            <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path>
        </svg>);

    return (
        <Modal open={open} onClose={onClose} center classNames={{modal:'movieModal'}} closeIcon={closeIcon}>
                <PageBody>
                        <MovieDetails
                            movieId={movie.id}
                            title={movie.Title}
                            releaseDate={movie.ReleaseDate}
                            poster={movie.PosterPath} 
                            imdbId={movie.ImdbId}
                            overview={movie.Overview}
                            nominations={movie.Nominations}
                            credits={movie.Credits}
                            usersWatched={movie.Watched}
                            isWatched={isWatched}/>
                </PageBody>
            </Modal>
    )
}

export default MovieModal
