import React, {useState, useEffect} from 'react';
import MovieCard from '../components/MovieCard';
import { Page, PageBody } from '../components/PageElements';
import { MoviesContainer } from '../components/MovieCardElements';

function Movies() {
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        getMoviesData();
    }, [])

    const getMoviesData = async () => {
        return await fetch("http://localhost:3030/movies-data")
            .then((response) => response.json())
            .then((data) => setMoviesData(data));
      };

    return (
        <Page>
            <PageBody>
                <MoviesContainer>
                    {moviesData.map(movie => (
                        <MovieCard title={movie.Title}
                                releaseDate={movie.ReleaseDate}
                                imageUrl={movie.PosterPath}/>
                    ))}
                </MoviesContainer>
            </PageBody>
        </Page>
    )
}

export default Movies
