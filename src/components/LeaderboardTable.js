import React, {useMemo} from 'react';
import { Rank, ScoreGauge, ScoreHeader, ScoreMeter, ScoreWrapper, UserDisplayName } from './LeaderboardTableElements';
import Table from './Table';

function LeaderboardTable({data}) {
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
                <ScoreGauge width={calculateWidthPercentage(props.row.original.Score, 50)}></ScoreGauge>
                <ScoreHeader>{props.row.original.Score + "/50 Total Score"}</ScoreHeader>
              </ScoreMeter>
              <ScoreMeter>
                <ScoreGauge width={calculateWidthPercentage(props.row.original.WatchedMovies,50)}></ScoreGauge>
                <ScoreHeader>{props.row.original.WatchedMovies + "/50 Watched Movies"}</ScoreHeader>
              </ScoreMeter>
              <ScoreMeter>
                <ScoreGauge width={calculateWidthPercentage(props.row.original.Bets,50)}></ScoreGauge>
                <ScoreHeader>{props.row.original.Bets + "/50 Bets"}</ScoreHeader>
              </ScoreMeter>
            </ScoreWrapper>
          }
        ],[]
      );

      function calculateWidthPercentage(value, maxValue){
        return (value/maxValue) * 100 + "%";
      }
    return (
        <Table columns={columns} data={data}/>
    )
}

export default LeaderboardTable
