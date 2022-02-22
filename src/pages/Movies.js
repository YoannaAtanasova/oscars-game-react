import React, { useState, useEffect } from "react";
import MovieCard from "../components/Card/MovieCard";
import { Page, PageBody } from "../components/styled/PageElements";
import { MoviesContainer } from "../components/Card/CardElements";
import { GlobalStorageKeys } from "../Global";

function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    const user = sessionStorage.getItem(GlobalStorageKeys.USER_ID);
    getMoviesData();
    user && getUserInfo(user);
  }, []);

  const getMoviesData = async () => {
    return await fetch(`${process.env.REACT_APP_API_URL}/movies`)
      .then((response) => response.json())
      .then((data) => setMoviesData(data));
  };

  const getUserInfo = async (user) => {
    return await fetch(
      `${process.env.REACT_APP_API_URL}/users/${user}?_embed=watchedMovies`
    )
      .then((response) => response.json())
      .then((data) => setWatchedMovies(data.watchedMovies));
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
              poster={movie.PosterPath}
              movieDetails={movie}
              showWatchedButton={true}
              isWatched={watchedMovies.some((x) => x.movieId === movie.id)}
            />
          ))}
        </MoviesContainer>
      </PageBody>
    </Page>
  );
}

export default Movies;
