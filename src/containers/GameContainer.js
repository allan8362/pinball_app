import React, {Fragment} from 'react';
import ScoreBar from '../components/ScoreBar';
import GameTable from '../components/GameTable';


const GameContainer = (props) => {
  return (
    <Fragment>
      <ScoreBar />
      <GameTable />
    </Fragment>
  )
}

export default GameContainer;
