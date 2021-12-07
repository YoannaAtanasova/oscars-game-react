import React, {useEffect, useState} from 'react';
import { GiPopcorn } from 'react-icons/gi';
import { GlobalColors, GlobalStorageKeys } from '../Global';
import { MarkWatchedWrapper, MarkWatchedButton } from './styled/CardElements';

function MarkWatchedMovie({isWatched, movieId}) {
    const [movieIsWatched, setMovieIsWatched ] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        setCurrentUser(sessionStorage.getItem(GlobalStorageKeys.USER_ID));
        setMovieIsWatched(isWatched);
    }, [isWatched]);

    function handleWatchedButton() {
        if (!JSON.parse(sessionStorage.getItem(GlobalStorageKeys.USER_IS_LOGGED_IN))) return;
        
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
