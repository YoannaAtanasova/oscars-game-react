import React from 'react'

import {Page, BackgroundBanner, Banner, Title, Header, PageBody, Paragraph, SubHeader} from '../components/PageElements';

function Home() {
    return (
        <>
            <BackgroundBanner>
                <Banner>
                    <Header>
                        OSCARS
                    </Header>
                    <SubHeader>
                        THE GAME
                    </SubHeader>
                </Banner>
            </BackgroundBanner>
            <Page>
                <PageBody>
                    <Paragraph>
                        You have reached the Proxiad Oscars Game website.
                    </Paragraph>
                    
                    <Paragraph>
                        Every Proxiad member can participate in the game by logging in with their existing Proxiad office 365 account.
                    </Paragraph>
                    
                    <Paragraph>
                        You have the chance to show off your incredible prediction skills by guessing the Winners of this years Oscars nomenees.
                        Take a look of all the Categories and Nomination.
                        Make sure to take your picks before the start of the 93nd Academy Awards ceremony on April 25, 2021.
                    </Paragraph>

                    <Paragraph>
                        Be sure to mark all the nominated movies that you have watched as well (and no cheating!).
                        If several users have the same number of guessed Winners, the user who has watched more of the nominated movies will have an advantage.
                    </Paragraph>  

                    <Paragraph>
                        Good luck and happy watching!
                    </Paragraph>          
                </PageBody>
            </Page>
        </>
    )
}

export default Home; 