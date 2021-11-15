import React, {useEffect, useState} from 'react';
import MovieCard from '../components/MovieCard';
import { MoviesContainer } from '../components/MovieCardElements';

function Nominations({categoryId}) {
    const [nominations, setNominations] = useState([]);
    const [userInfo, setUserInfo] = useState({userId: '', votedMovies: []});

    const{userId, votedMovies} = userInfo;

    useEffect(() => {
        //const userId = localStorage.getItem('userId');
        getNominationsData(categoryId);
        getUserInfo();
    }, [categoryId]);
    
    const getNominationsData = async (category) => {
        return await fetch(`${process.env.REACT_APP_API_URL}/nominations?categoryId=${category}&_expand=movie`)
            .then((response) => response.json())
            .then((data) => setNominations(data));
      };

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
                    {nominations.map((nomination, index) => (
                        <MovieCard
                                key={index} 
                                imageId={nomination.movie.Id}
                                title={nomination.movie.Title}
                                releaseDate={nomination.movie.ReleaseDate}
                                imageUrl={nomination.movie.PosterPath}
                                overview={nomination.movie.Overview}
                                nominations={nomination.movie.Nominations}
                                credits={nomination.movie.Credits}
                                usersWatched={nomination.movie.Watched}
                                showWatchedButton={false}
                                isVoted={votedMovies.some(x=>x.movieId === nomination.movie.Id)}
                                currentUser={userId}/>
                    ))}
                </MoviesContainer>
    )
}

export default Nominations;
 