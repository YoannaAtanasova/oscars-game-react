import React, {useState} from 'react';
import { Card, CardContent, CardImageContainer, 
    Image, ImageLink, ImageWrapper, 
    MarkWarchedWrapper, MarkWatchedButton, 
    Title, TitleLink, ReleaseDate } from './MovieCardElements';
import {GiPopcorn} from 'react-icons/gi';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Movie from '../pages/Movie';
import '../App.css'

function MovieCard({imageId, title, releaseDate, imageUrl, showWatchedButton}) {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const closeIcon = (
        <svg viewBox="0 0 36 36" width="28" height="28" data-testid="close-icon" fill="#b69323">
            <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path>
        </svg>);

    return (
        <div>
            <Card>
                <CardImageContainer>
                    <ImageWrapper>
                        <ImageLink onClick={onOpenModal}>
                            <Image src={imageUrl}/>
                        </ImageLink>
                    </ImageWrapper>
                    {showWatchedButton && (
                        <MarkWarchedWrapper>
                            <MarkWatchedButton href="/" title="Mark as watched">
                                <GiPopcorn size='1.8em' style={{ fill: "url(#gold-gradient)" }}/>
                            </MarkWatchedButton>
                        </MarkWarchedWrapper>
                    )}
                </CardImageContainer>
                <CardContent>
                    <Title>
                        <TitleLink href={"/movie/" + imageId} target="_newTab"> {title} </TitleLink>
                    </Title>
                    <ReleaseDate>{releaseDate}</ReleaseDate>
                </CardContent>
            </Card>
            <Modal open={open} onClose={onCloseModal} center classNames={{modal:'movieModal'}} closeIcon={closeIcon}>
                <Movie movieIdParam={imageId}/>
            </Modal>
        </div>
    )
}

export default MovieCard
