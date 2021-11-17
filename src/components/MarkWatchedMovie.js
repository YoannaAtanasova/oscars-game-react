import React, {useEffect, useState} from 'react';
import { GiPopcorn } from 'react-icons/gi';
import { GlobalColors } from '../Global';
import { MarkWatchedWrapper, MarkWatchedButton } from './styled/MovieCardElements';

function MarkWatchedMovie({isWatched, movieId, currentUser}) {
    const [movieIsWatched, setMovieIsWatched ] = useState(false);

    useEffect(() => {
        setMovieIsWatched(isWatched);
    }, [isWatched]);

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

    return (
        <MarkWatchedWrapper color={movieIsWatched ? GlobalColors.LightGray : GlobalColors.MidGray}>
            <MarkWatchedButton onClick={handleWatchedButton} title="Mark as watched">
                <GiPopcorn size='1.8em' style={{ fill: "url(#gold-gradient)" }}/>
            </MarkWatchedButton>
        </MarkWatchedWrapper>
    )
}

export default MarkWatchedMovie
