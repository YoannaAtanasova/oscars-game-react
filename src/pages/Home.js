import React from 'react'

import {Page, BackgroundBanner, Banner, Header, PageBody, Paragraph, SubHeader} from '../components/PageElements';

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
                        Of all the Oscars joints in all the websites in all the world, you walk into mine.
                    </Paragraph>

                    <Paragraph>
                        Toto, I've a feeling we're not in Kansas anymore, because this is the Proxiad Oscars Game website.
                    </Paragraph>
                    
                    <Paragraph>
                        Every Proxiad member can participate in the game by logging in with their existing Proxiad office 365 account.
                        If you don't have one, frankly, my dear, I don't give a damn.
                    </Paragraph>
                    
                    <Paragraph>You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk? Bucause I'm gonna make you an offer you can't refuse.</Paragraph>

                    <Paragraph>
                        You have the chance to show off your incredible prediction skills by guessing the Winners of this years Oscars nomenees.
                        The rules are elementary, my dear Watson.
                        Take a look of all the Categories and Nomination.
                    </Paragraph>

                    <Paragraph>
                        'You talkin' to me?' Yeah, you. Make sure to take your picks before the start of the 93rd Academy Awards ceremony on April 25, 2021.
                    </Paragraph>

                    <Paragraph>
                        One more thing!
                    </Paragraph>

                    <Paragraph>
                        Be sure to mark all the nominated movies that you have watched as well. And no cheating bacuase, Houston, we are going to have a problem.
                        If several users have the same number of guessed Winners, don't worry. Nobody puts Baby in a corner. The user who has watched more of the nominated movies will have an advantage.
                    </Paragraph>  

                    <Paragraph>
                        Grab your popcorn, round up the usual suspects, happy watching and may the force be with you!
                    </Paragraph>          
                </PageBody>
            </Page>
        </>
    )
}

export default Home; 