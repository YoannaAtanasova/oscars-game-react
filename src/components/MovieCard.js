import React, {useState} from 'react';
import { Card, CardContent, CardImageContainer, 
    Image, ImageLink, ImageWrapper, 
    Title, TitleLink, ReleaseDate, WinnerIcon} from './MovieCardElements';
import 'react-responsive-modal/styles.css';
import '../App.css'
import MovieModal from './MovieModal';
import MarkWatchedMovie from './MarkWatchedMovie';
import MarkMovieVote from './MarkMovieVote';

function MovieCard({movieId, title, releaseDate, imageUrl, movieDetails, showWatchedButton, isWatched, isVoted, isWinner, currentUser}) {
    const [open, setOpen] = useState(false);    

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);  

    return (
        <div>
            <Card>
                <CardImageContainer>
                    <ImageWrapper>
                        <ImageLink onClick={onOpenModal}>
                            <Image src={imageUrl} isWinner={isWinner}/>
                            {isWinner && <WinnerIcon src='/OscarAward.svg'/>}
                        </ImageLink>
                    </ImageWrapper>
                    {showWatchedButton ? 
                        <MarkWatchedMovie isWatched={isWatched} movieId={movieId} currentUser={currentUser}/>
                        : (<MarkMovieVote isVoted={isVoted} movieId={movieId} currentUser={currentUser}/>)
                    }
                </CardImageContainer>
                <CardContent>
                    <Title>
                        <TitleLink href={"/movie/" + movieId} target="_newTab"> {title} </TitleLink>
                    </Title>
                    <ReleaseDate>{releaseDate}</ReleaseDate>
                </CardContent>
            </Card>
            <MovieModal movie={movieDetails} open={open} onClose={onCloseModal}/>
        </div>
    )
}

export default MovieCard
