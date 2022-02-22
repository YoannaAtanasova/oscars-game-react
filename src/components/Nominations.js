import React, { useEffect, useState } from "react";
import MovieCard from "./Card/MovieCard";
import { MoviesContainer } from "./Card/CardElements";
import { GlobalStorageKeys } from "../Global";
import CastCard from "./Card/CastCard";

function Nominations({ categoryId }) {
  const [nominations, setNominations] = useState([]);
  const [vote, setVote] = useState([]);

  useEffect(() => {
    const user = sessionStorage.getItem(GlobalStorageKeys.USER_ID);
    getNominationsData(categoryId);
    user && getUserInfo(user, categoryId);
  }, [categoryId]);

  const getNominationsData = async (category) => {
    return await fetch(
      `${process.env.REACT_APP_API_URL}/nominations?categoryId=${category}&_expand=movie`
    )
      .then((response) => response.json())
      .then((data) => setNominations(data));
  };

  const getUserInfo = async (user, category) => {
    return await fetch(
      `${process.env.REACT_APP_API_URL}/votedMovies?categoryId=${category}&userId=${user}`
    )
      .then((response) => response.json())
      .then((data) => setVote(data));
  };

  const onVoteChange = (categoryId) => {
    getUserInfo(categoryId);
  };

  return (
    <MoviesContainer>
      {nominations.filter(
        (nomination) => nomination.credits && nomination.credits.length === 1
      ).length >
      nominations.length / 2
        ? nominations.map((nomination, index) => (
            <CastCard
              key={index}
              nominationId={nomination.id}
              nomenee={nomination.credits[0].Name}
              role={nomination.credits[0].Role}
              movieId={nomination.movie.Id}
              title={nomination.movie.Title}
              poster={nomination.credits[0].Image}
              movieDetails={nomination.movie}
              isVoted={vote.some((x) => x.nominationId === nomination.id)}
              onVoteChange={onVoteChange}
              isWinner={nomination.IsWinner}
            />
          ))
        : nominations.map((nomination, index) => (
            <MovieCard
              key={index}
              nominationId={nomination.id}
              movieId={nomination.movie.Id}
              title={nomination.movie.Title}
              releaseDate={nomination.movie.ReleaseDate}
              poster={nomination.movie.PosterPath}
              movieDetails={nomination.movie}
              showWatchedButton={false}
              isVoted={vote.some((x) => x.nominationId === nomination.id)}
              onVoteChange={onVoteChange}
              isWinner={nomination.IsWinner}
            />
          ))}
    </MoviesContainer>
  );
}

export default Nominations;
