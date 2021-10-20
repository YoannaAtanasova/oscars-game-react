import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import MovieDetails from '../components/MovieDetails';
import { Page, PageBody } from '../components/PageElements';

function Movie({id}) {
    const {movieId} = useParams();

    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        getMovieData();
    }, [])

    const getMovieData = async () => {
        return await fetch("http://localhost:3030/movies-data-" + (movieId ? movieId : id) )
            .then((response) => response.json())
            .then((data) => setMovieData(data));
      };

    return (
        <Page padding={id ? '50px' : ''}>
            <PageBody>
                {movieData.map((movie, index) => (
                    <MovieDetails key={index} 
                        imageId={movie.Id}
                        title={movie.Title}
                        releaseDate={movie.ReleaseDate}
                        imageUrl={movie.PosterPath}
                        imdbId={movie.ImdbId}
                        overview={movie.Overview}
                        nominations={movie.Nominations}
                        credits={movie.Credits}
                        usersWatched={movie.Watched}/>))}
                
            </PageBody>
        </Page>
    );
}

export default Movie;
