import React, {useEffect, useMemo, useState} from 'react';
import { Rank, ScoreGauge, ScoreHeader, ScoreMeter, ScoreWrapper, UserDisplayName } from './styled/LeaderboardTableElements';
import Table from './Table';

function LeaderboardTable({data}) {
    const [gameInformation, setGameInformation] = useState({
      moviesCount: 0,
      categoriesCount: 0
    });

    const {moviesCount, categoriesCount} = gameInformation;

    useEffect(() => { getGameInformation(); },[]);

    const getGameInformation = async () => {
      return await fetch(`${process.env.REACT_APP_API_URL}/game-information`)
        .then(response => response.json())
        .then(data => setGameInformation({
          moviesCount: data.Movies,
          categoriesCount: data.Categories
        }));
    };

    const columns = useMemo(
        () => [
          {
            Header: "Rank",
            accessor: "Rank",
            maxWidth: 5,
            Cell: props => 
              <Rank>{props.value}</Rank>
          },
          {
            Header: "User",
            accessor: "UserDisplayName",
            Cell: props =>
              <UserDisplayName>{props.value}</UserDisplayName>
          },
          {
            Header: "Score",
            accessor: "Score",
            Cell: props => 
            <ScoreWrapper>
              <ScoreMeter>
                <ScoreGauge width={calculateWidthPercentage(props.row.original.Score, categoriesCount)}></ScoreGauge>
                <ScoreHeader>{props.row.original.Score + "/" + categoriesCount +" Total Score"}</ScoreHeader>
              </ScoreMeter>
              <ScoreMeter>
                <ScoreGauge width={calculateWidthPercentage(props.row.original.WatchedMovies, moviesCount)}></ScoreGauge>
                <ScoreHeader>{props.row.original.WatchedMovies + "/" + moviesCount + " Watched Movies"}</ScoreHeader>
              </ScoreMeter>
              <ScoreMeter>
                <ScoreGauge width={calculateWidthPercentage(props.row.original.Bets, categoriesCount)}></ScoreGauge>
                <ScoreHeader>{props.row.original.Bets + "/" + categoriesCount + " Bets"}</ScoreHeader>
              </ScoreMeter>
            </ScoreWrapper>
          }
        ],[moviesCount, categoriesCount]
      );

      function calculateWidthPercentage(value, maxValue){
        return (value/maxValue) * 100 + "%";
      }
    return (
        <Table columns={columns} data={data}/>
    )
}

export default LeaderboardTable
