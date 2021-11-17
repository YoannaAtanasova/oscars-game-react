import React, {useEffect, useState} from 'react';
import MovieCard from '../components/MovieCard';
import { MoviesContainer } from '../components/styled/CardElements';
import CastCard from './CastCard';

function Nominations({categoryId}) {
    const [nominations, setNominations] = useState([]);
    const [vote, setVote] = useState([]);

    useEffect(() => {
        //const userId = localStorage.getItem('userId');
        getNominationsData(categoryId);
        getUserInfo(categoryId);
    }, [categoryId]);
    
    const getNominationsData = async (category) => {
        return await fetch(`${process.env.REACT_APP_API_URL}/nominations?categoryId=${category}&_expand=movie`)
            .then((response) => response.json())
            .then((data) => setNominations(data));
      };

    const getUserInfo = async (category) => {
        return await fetch(`${process.env.REACT_APP_API_URL}/votedMovies?categoryId=${category}&userId=1`)
            .then((response) => response.json())
            .then((data) => setVote(data));
        };

    return (
        <MoviesContainer>
            {nominations.filter(nomination =>nomination.credits && nomination.credits.length === 1).length > (nominations.length/2) ?
                    nominations.map((nomination, index) => (
                        <CastCard
                                key={index}
                                nomenee={nomination.credits[0].Name} 
                                role={nomination.credits[0].Role}
                                movieId={nomination.movie.Id}
                                title={nomination.movie.Title}
                                imageUrl={nomination.credits[0].Image}
                                movieDetails = {nomination.movie}
                                isVoted={vote.some(x=> x.movieId === nomination.movie.id)}
                                isWinner={nomination.IsWinner}
                                currentUser={1}/>
                    ))
                : nominations.map((nomination, index) => (
                    <MovieCard
                            key={index} 
                            movieId={nomination.movie.Id}
                            title={nomination.movie.Title}
                            releaseDate={nomination.movie.ReleaseDate}
                            imageUrl={nomination.movie.PosterPath}
                            movieDetails = {nomination.movie}
                            showWatchedButton={false}
                            isVoted={vote.some(x=> x.movieId === nomination.movie.id)}
                            isWinner={nomination.IsWinner}
                            currentUser={1}/>
                ))}
                </MoviesContainer>
    )
}

export default Nominations;
 