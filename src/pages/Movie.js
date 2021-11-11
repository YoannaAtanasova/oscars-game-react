import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import MovieDetails from '../components/MovieDetails';
import { Page, PageBody } from '../components/PageElements';

function Movie({movieIdParam}) {
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
        fetch(`${process.env.REACT_APP_API_URL}/movies-data/${(movieIdFromUrl ? movieIdFromUrl : movieIdParam)}` )
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
    }, [movieIdFromUrl, movieIdParam]);

    return (
        <Page padding={movieIdParam ? '50px' : ''}>
            <PageBody>
                    <MovieDetails
                        imageId={id}
                        title={title}
                        releaseDate={releaseDate}
                        imageUrl={posterPath}
                        imdbId={imdbId}
                        overview={overview}
                        nominations={nominations}
                        credits={credits}
                        usersWatched={watched}/>
            </PageBody>
        </Page>
    );
}

export default Movie;
