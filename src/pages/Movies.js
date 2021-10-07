import React, {useState, useEffect} from 'react';
import MovieCard from '../components/MovieCard';
import { Page, PageBody } from '../components/PageElements';

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
                <MovieCard/>
                {moviesData.map(movie => (
                    <p>{movie.Title}</p>
                ))}
            </PageBody>
        </Page>
    )
}

export default Movies
