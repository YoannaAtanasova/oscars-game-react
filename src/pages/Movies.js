import React from 'react';
import MovieCard from '../components/MovieCard';
import { Page, PageBody } from '../components/PageElements';

function Movies() {
    return (
        <Page>
            <PageBody>
                <MovieCard/>
            </PageBody>
        </Page>
    )
}

export default Movies
