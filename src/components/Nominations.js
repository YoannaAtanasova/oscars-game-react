import React from 'react';
import MovieCard from '../components/MovieCard';
import { MoviesContainer } from '../components/MovieCardElements';

function Nominations({nominaionsData}) {
    return (
        <MoviesContainer>
                    {nominaionsData.map((nomination, index) => (
                        <MovieCard
                                key={index} 
                                imageId={nomination.Movie.Id}
                                title={nomination.Movie.Title}
                                releaseDate={nomination.Movie.ReleaseDate}
                                imageUrl={nomination.Movie.PosterPath}
                                showWatchedButton={false}/>
                    ))}
                </MoviesContainer>
    )
}

export default Nominations;
 