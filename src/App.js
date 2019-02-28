import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.scss';

import Header from './Header/Header';
import ServicePage from './ServicePage/ServicePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ServicePage />
      </div>
    );
  }
}

export default App;
