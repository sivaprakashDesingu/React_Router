import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Dash from './Components/Dash/Dash';
import Profile from './Components/Profile/Profile';
import PageNotFound from './Components/PageNotFound/PageNotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/dash' component={Dash} />
            <Route exact path='/profile' component={Profile} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
