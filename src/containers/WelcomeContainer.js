import React from 'react';
import {Link} from 'react-router-dom';
import HighScore from '../components/HighScore';

const WelcomeContainer = () => {

  return (
    <div>
      <p>Welcome container</p>
      <HighScore />
      <button><Link to="/game">New Game</Link></button>
    </div>
  )
}

export default WelcomeContainer;
