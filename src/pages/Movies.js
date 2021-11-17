import React, {useState, useEffect} from 'react';
import MovieCard from '../components/MovieCard';
import { Page, PageBody } from '../components/styled/PageElements';
import { MoviesContainer } from '../components/styled/MovieCardElements';

function Movies() {
    const [moviesData, setMoviesData] = useState([]);
    const [userInfo, setUserInfo] = useState({userId: '', watchedMovies: []});

    const{userId, watchedMovies} = userInfo;
    
    useEffect(() => {
        getMoviesData();
        getUserInfo();
    }, []);

    const getMoviesData = async () => {
        return await fetch(`${process.env.REACT_APP_API_URL}/movies`)
            .then((response) => response.json())
            .then((data) => setMoviesData(data));
      };

    const getUserInfo = async () => {
        return await fetch(`${process.env.REACT_APP_API_URL}/users/1?_embed=watchedMovies`)
            .then((response) => response.json())
            .then((data) => setUserInfo({
                userId: data.id,
                watchedMovies: data.watchedMovies
            }));
      };

    return (
        <Page>
            <PageBody>
                <MoviesContainer>
                    {moviesData.map((movie, index) => (
                        <MovieCard
                                key={index} 
                                movieId={movie.id}
                                title={movie.Title}
                                releaseDate={movie.ReleaseDate}
                                imageUrl={movie.PosterPath}
                                movieDetails = {movie}
                                showWatchedButton={true}
                                isWatched={watchedMovies.some(x=> x.movieId === movie.id)}
                                currentUser={userId}/>
                    ))}
                </MoviesContainer>
            </PageBody>
        </Page>
    )
}

export default Movies
