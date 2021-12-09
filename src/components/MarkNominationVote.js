import React, {useEffect, useState} from 'react';
import {MdHowToVote} from 'react-icons/md';
import { GlobalColors, GlobalStorageKeys } from '../Global';
import { MarkVotedWrapper, MarkVotedButton } from './styled/CardElements';

function MarkNominationVote({isVoted, nominationId, categoryId, onVoteChange}) {
    const [movieIsVotedFor, setMovieIsVotedFor ] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        setCurrentUser(sessionStorage.getItem(GlobalStorageKeys.USER_ID));
        setMovieIsVotedFor(isVoted);
    }, [isVoted]);

    function handleVotedButton() {
        if (!JSON.parse(sessionStorage.getItem(GlobalStorageKeys.USER_IS_LOGGED_IN))) return;
        
        onVoteChange(categoryId, currentUser);
        if (movieIsVotedFor) {
            fetch(`${process.env.REACT_APP_API_URL}/votedMovies/${nominationId}`, {
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
                    nominationId: nominationId,
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
        <MarkVotedWrapper isVoted={movieIsVotedFor}>
            <MarkVotedButton onClick={handleVotedButton} title="Vote for this movie">
                <MdHowToVote size='1.8em' style={{ fill: !movieIsVotedFor ? "url(#gold-gradient)" : GlobalColors.WhiteGold}}/>
            </MarkVotedButton>
        </MarkVotedWrapper>
    )
}

export default MarkNominationVote;
