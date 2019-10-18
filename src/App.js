import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomeContainer from './containers/WelcomeContainer';
import GameContainer from './containers/GameContainer';


class App extends Component {
  render (){
    return (
      <Router>
        <WelcomeContainer />

      </Router>
    );
  }

}

export default App;
