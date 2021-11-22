import React, {useState} from 'react';
import { Card, CardContent, CardImageContainer, 
    Image, ImageLink, ImageWrapper, 
    Title, TitleLink, SubTitle, WinnerIcon} from './styled/CardElements';
import 'react-responsive-modal/styles.css';
import '../App.css'
import MovieModal from './MovieModal';
import MarkWatchedMovie from './MarkWatchedMovie';
import MarkNominationVote from './MarkNominationVote';
import { GlobalURLs } from '../Global';

function MovieCard({categoryId, nominationId, movieId, title, releaseDate, poster, movieDetails, showWatchedButton, isWatched, isVoted, onVoteChange, isWinner, currentUser}) {
    const [open, setOpen] = useState(false);    

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);  

    return (
        <div>
            <Card>
                <CardImageContainer>
                    <ImageWrapper>
                        <ImageLink onClick={onOpenModal}>
                            <Image src={GlobalURLs.TMDB_MEDIUM_IMAGE_URL.format(poster)} isWinner={isWinner}/>
                            {isWinner && <WinnerIcon src='/OscarAward.svg'/>}
                        </ImageLink>
                    </ImageWrapper>
                    {showWatchedButton ? 
                        <MarkWatchedMovie isWatched={isWatched} movieId={movieId} currentUser={currentUser}/>
                        : (<MarkNominationVote isVoted={isVoted} nominationId={nominationId} categoryId={categoryId} currentUser={currentUser} onVoteChange={onVoteChange}/>)
                    }
                </CardImageContainer>
                <CardContent>
                    <Title>
                        <TitleLink href={"/movie/" + movieId} target="_newTab"> {title} </TitleLink>
                    </Title>
                    <SubTitle>{releaseDate}</SubTitle>
                </CardContent>
            </Card>
            <MovieModal movie={movieDetails} open={open} onClose={onCloseModal}/>
        </div>
    )
}

export default MovieCard
