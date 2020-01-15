import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import StarshipPage from './pages/StarshipPage/StarshipPage';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="Star Wars API">
         <p>This is the App.js page</p>
         <StarshipPage />
        </header>
      </div>
    );

  }
}

export default App;
