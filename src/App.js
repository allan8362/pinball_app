import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomeContainer from './containers/WelcomeContainer';
import GameContainer from './containers/GameContainer';


class App extends Component {
  render (){
    return (
      <Router>
      <Fragment>
      <Switch>
        <Route path="/welcome" component= {WelcomeContainer} />
        <Route path="/game" component={GameContainer} />
        </Switch>
      </Fragment>
      </Router>


    );
  }

}

export default App;
