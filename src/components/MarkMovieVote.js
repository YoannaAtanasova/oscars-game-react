import React, {useEffect, useState} from 'react';
import {MdHowToVote} from 'react-icons/md';
import { GlobalColors } from '../Global';
import { MarkVotedWrapper, MarkVotedButton } from './MovieCardElements';

function MarkMovieVote({isVoted, movieId, currentUser}) {
    const [movieIsVotedFor, setMovieIsVotedFor ] = useState(false);

    useEffect(() => {
        setMovieIsVotedFor(isVoted);
    }, [isVoted]);

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
        <MarkVotedWrapper color={movieIsVotedFor ? GlobalColors.LightGray : GlobalColors.MidGray}>
            <MarkVotedButton onClick={handleVotedButton} title="Vote for this movie">
                <MdHowToVote size='1.8em' style={{ fill: "url(#gold-gradient)" }}/>
            </MarkVotedButton>
        </MarkVotedWrapper>
    )
}

export default MarkMovieVote
