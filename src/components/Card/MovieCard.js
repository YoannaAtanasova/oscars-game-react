import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardImageContainer,
  Image,
  ImageLink,
  ImageWrapper,
  Title,
  TitleLink,
  SubTitle,
  WinnerIcon,
} from "./CardElements";
import "react-responsive-modal/styles.css";
import "../../App.css";
import MovieModal from "../MovieModal";
import MarkWatchedMovie from "../MarkWatchedMovie";
import MarkNominationVote from "../MarkNominationVote";
import { GlobalStorageKeys, GlobalURLs } from "../../Global";

function MovieCard({
  categoryId,
  nominationId,
  movieId,
  title,
  releaseDate,
  poster,
  movieDetails,
  showWatchedButton,
  isWatched,
  isVoted,
  onVoteChange,
  isWinner,
}) {
  const [open, setOpen] = useState(false);
  const [isMarkedAsWatched, setIsMarkedAsWatched] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    setIsMarkedAsWatched(isWatched);
  }, [isWatched]);

  const onMarkAsWatched = (isMarked) => {
    setIsMarkedAsWatched(isMarked);
  };

  return (
    <div>
      <Card>
        <CardImageContainer>
          <ImageWrapper>
            <ImageLink onClick={onOpenModal}>
              <Image
                src={GlobalURLs.TMDB_MEDIUM_IMAGE_URL.format(poster)}
                isWinner={isWinner}
              />
              {isWinner && <WinnerIcon src="/OscarAward.svg" />}
            </ImageLink>
          </ImageWrapper>
          {JSON.parse(
            sessionStorage.getItem(GlobalStorageKeys.USER_IS_LOGGED_IN)
          ) &&
            (showWatchedButton ? (
              <MarkWatchedMovie
                isWatched={isMarkedAsWatched}
                movieId={movieId}
              />
            ) : (
              <MarkNominationVote
                isVoted={isVoted}
                nominationId={nominationId}
                categoryId={categoryId}
                onVoteChange={onVoteChange}
              />
            ))}
        </CardImageContainer>
        <CardContent>
          <Title>
            <TitleLink href={"/movie/" + movieId} target="_newTab">
              {" "}
              {title}{" "}
            </TitleLink>
          </Title>
          <SubTitle>{releaseDate}</SubTitle>
        </CardContent>
      </Card>
      <MovieModal
        movie={movieDetails}
        isWatched={isWatched}
        open={open}
        onClose={onCloseModal}
        onMarkAsWatched={onMarkAsWatched}
      />
    </div>
  );
}

export default MovieCard;
