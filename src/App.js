import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation'
import Routes from './Routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <div className="md-grid">
            <div className="md-cell md-cell--10 md-cell--2-offset">
              <Routes />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
