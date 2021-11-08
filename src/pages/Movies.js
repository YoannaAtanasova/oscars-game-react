import React, {useState, useEffect} from 'react';
import MovieCard from '../components/MovieCard';
import { Page, PageBody } from '../components/PageElements';
import { MoviesContainer } from '../components/MovieCardElements';

function Movies() {
    const [moviesData, setMoviesData] = useState([]);
    const [userInfo, setUserInfo] = useState({userId: '', watchedMovies: []});

    const{userId, watchedMovies} = userInfo;
    
    useEffect(() => {
        getMoviesData();
        getUserInfo();
    }, []);

    const getMoviesData = async () => {
        return await fetch("http://localhost:3030/movies-data")
            .then((response) => response.json())
            .then((data) => setMoviesData(data));
      };

    const getUserInfo = async () => {
        return await fetch("http://localhost:3030/user-information/1")
            .then((response) => response.json())
            .then((data) => setUserInfo({
                userId: data.id,
                watchedMovies: data.WatchedMovies
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
                                imageId={movie.id}
                                title={movie.Title}
                                releaseDate={movie.ReleaseDate}
                                imageUrl={movie.PosterPath}
                                overview={movie.Overview}
                                nominations={movie.Nominations}
                                credits={movie.Credits}
                                usersWatched={movie.Watched}
                                showWatchedButton={true}
                                isWatched={watchedMovies.some(x=> x.id === movie.id)}
                                currentUser={userId}/>
                    ))}
                </MoviesContainer>
            </PageBody>
        </Page>
    )
}

export default Movies
