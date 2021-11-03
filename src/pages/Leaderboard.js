import React, {useEffect, useState} from 'react';
import LeaderboardTable from '../components/LeaderboardTable';
import { Page, PageBody, Title, TitleWrapper } from '../components/PageElements';

function Leaderboard() {
    const [scoreData, setScoreData] = useState([]);

    useEffect(() => {
        getScoreData();
    }, []);

    const getScoreData = async () => {
        return await fetch("http://localhost:3030/user-score")
            .then((response) => response.json())
            .then((data) => setScoreData(data));
      };

    return (
        <Page>
            <PageBody>
                <TitleWrapper>
                    <Title>Leaderboard</Title>
                </TitleWrapper>
                <LeaderboardTable data={scoreData}/>
            </PageBody>
        </Page>
    )
};

export default Leaderboard;