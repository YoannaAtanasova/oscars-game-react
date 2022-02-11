import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import MovieDetails from '../components/MovieDetails';
import { Page, PageBody } from '../components/styled/PageElements';
import { GlobalStorageKeys } from '../Global';

function Movie() {
    const {movieIdFromUrl} = useParams();

    const [movieData, setMovieData] = useState(
        {
            id: '', 
            title: '', 
            releaseDate: '', 
            posterPath: '',
            imdbId: '',
            overview: '',
            nominations: [],
            credits: [],
            watched: []
        });

    const {id, title, releaseDate, posterPath, imdbId, overview, nominations, credits, watched} = movieData;

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/movies/${movieIdFromUrl}` )
            .then((response) => response.json())
            .then((data) => setMovieData({
                id: data.id,
                title: data.Title,
                releaseDate: data.ReleaseDate,
                posterPath: data.PosterPath,
                imdbId: data.ImdbID,
                overview: data.Overview,
                nominations: data.Nominations,
                credits: data.Credits,
                watched: data.Watched
            }));
    }, [movieIdFromUrl]);

    return (
        <Page padding={'50px'}>
            <PageBody>
                    <MovieDetails
                        movieId={id}
                        title={title}
                        releaseDate={releaseDate}
                        poster={posterPath}
                        imdbId={imdbId}
                        overview={overview}
                        nominations={nominations}
                        credits={credits}
                        usersWatched={watched}
                        isWatched={watched.some(x=>x.id === sessionStorage.getItem(GlobalStorageKeys.USER_ID))}/>
            </PageBody>
        </Page>
    );
}

export default Movie;
