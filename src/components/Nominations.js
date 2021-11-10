import React, {useEffect, useState} from 'react';
import MovieCard from '../components/MovieCard';
import { MoviesContainer } from '../components/MovieCardElements';

function Nominations({nominaionsData}) {
    const [userInfo, setUserInfo] = useState({userId: '', votedMovies: []});

    const{userId, votedMovies} = userInfo;

    useEffect(() => {
        //const userId = localStorage.getItem('userId');
        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        return await fetch(`${process.env.REACT_APP_API_URL}/users/1?_embed=votedMovies`)
            .then((response) => response.json())
            .then((data) => setUserInfo({
                userId: data.id,
                votedMovies: data.votedMovies
            }));
        };

    return (
        <MoviesContainer>
                    {nominaionsData.map((nomination, index) => (
                        <MovieCard
                                key={index} 
                                imageId={nomination.Movie.Id}
                                title={nomination.Movie.Title}
                                releaseDate={nomination.Movie.ReleaseDate}
                                imageUrl={nomination.Movie.PosterPath}
                                showWatchedButton={false}
                                isVoted={votedMovies.some(x=>x.movieId === nomination.Movie.Id)}
                                currentUser={userId}/>
                    ))}
                </MoviesContainer>
    )
}

export default Nominations;
 