import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import MovieDetails from '../components/MovieDetails';
import { Page, PageBody } from '../components/PageElements';

function Movie() {
    const {movieId} = useParams();

    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        getMovieData();
    }, [])

    const getMovieData = async () => {
        return await fetch("http://localhost:3030/movies-data-" + movieId )
            .then((response) => response.json())
            .then((data) => setMovieData(data));
      };

    return (
        <Page>
            <PageBody>
                {movieData.map((movie, index) => (
                    <MovieDetails key={index} 
                        imageId={movie.Id}
                        title={movie.Title}
                        releaseDate={movie.ReleaseDate}
                        imageUrl={movie.PosterPath}/>))}
                
            </PageBody>
        </Page>
    );
}

export default Movie;
