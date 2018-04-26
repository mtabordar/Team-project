import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation'
import Routes from './Routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="md-grid">
          <div className="md-cell--10 md-cell--2-offset">
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
