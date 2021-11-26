import React, {useState} from 'react';
import { GlobalURLs } from '../Global';
import MarkNominationVote from './MarkNominationVote';
import MovieModal from './MovieModal';
import { Card, CardContent, CardImageContainer, Image ,ImageLink, ImageWrapper, SubTitle, Title, TitleLink, WinnerIcon } from './styled/CardElements';

function CastCard({categoryId, nominationId, nomenee, role, movieId, title, poster, movieDetails, isVoted, onVoteChange, isWinner}) {
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
                    <MarkNominationVote isVoted={isVoted} nominationId={nominationId} categoryId={categoryId} onVoteChange={onVoteChange}/>
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
