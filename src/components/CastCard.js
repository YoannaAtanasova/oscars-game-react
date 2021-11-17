import React, {useState} from 'react';
import MarkMovieVote from './MarkMovieVote';
import MovieModal from './MovieModal';
import { Card, CardContent, CardImageContainer, Image ,ImageLink, ImageWrapper, SubTitle, Title, TitleLink, WinnerIcon } from './styled/CardElements';

function CastCard({nomenee, role, movieId, title, imageUrl, movieDetails, isVoted, isWinner ,currentUser}) {
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
                    <MarkMovieVote isVoted={isVoted} movieId={movieId} currentUser={currentUser}/>
                </CardImageContainer>
                <CardContent>
                    <Title>{nomenee}</Title>
                    <SubTitle>{role} in  
                        <TitleLink href={"/movie/" + movieId} target="_newTab"> {title} </TitleLink>
                    </SubTitle>
                </CardContent>
            </Card>
            <MovieModal movie={movieDetails} open={open} onClose={onCloseModal}/>
        </div>
    )
}

export default CastCard
