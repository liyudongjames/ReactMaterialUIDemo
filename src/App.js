import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Router, Switch, Route} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Errors from './component/Errors';
import Help from './component/Help';
import Navigation from './component/Navig';

class App extends Component {

  render() {
    return (
      <BrowserRouter >
        <div>
          <Navigation></Navigation>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/help" component={Help}></Route>
            <Route component={Errors}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
