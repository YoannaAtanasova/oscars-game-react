import React from 'react'
import Footer from '../components/Footer';

import {Page, BackgroundBanner, Header, PageBody} from '../components/PageElements';

function Home() {
    return (
        <>
            <BackgroundBanner>
                <Header>
                    
                </Header>
            </BackgroundBanner>
            <Page>
                <PageBody>
                    You have reached the Proxiad Oscars challenge game website.

                    Every Proxiad member can participate in the game by login with the Proxiad office 365 account.

                    You have the chance to show off your incredible predictive skills by guessing the Winners.
                    Take a look of all the Categories and Nomination at the Categories page.
                    Make your picks before the starting of the 93nd Academy Awards ceremony on April 25, 2021.

                    Take a look of all the nominated movies at the Movies page.
                    Mark all the movies that you have already watched.
                    If several users have the same number of guessed Winners,
                    the user who has watched more of the nominated movies will have an advantage.
                </PageBody>
            </Page>
        </>
    )
}

export default Home; 