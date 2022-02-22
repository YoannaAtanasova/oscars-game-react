import React, { useEffect, useState } from "react";
import LeaderboardTable from "../components/Leaderboard/LeaderboardTable";
import {
  Page,
  PageBody,
  Title,
  TitleWrapper,
} from "../components/styled/PageElements";

function Leaderboard() {
  const [scoreData, setScoreData] = useState([]);

  useEffect(() => {
    getScoreData();
  }, []);

  const getScoreData = async () => {
    return await fetch(`${process.env.REACT_APP_API_URL}/user-score`)
      .then((response) => response.json())
      .then((data) => setScoreData(data));
  };

  return (
    <Page>
      <PageBody>
        <TitleWrapper>
          <Title>Leaderboard</Title>
        </TitleWrapper>
        <LeaderboardTable data={scoreData} />
      </PageBody>
    </Page>
  );
}

export default Leaderboard;
