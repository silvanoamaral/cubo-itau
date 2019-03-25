import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.scss';

import Header from './Header/Header';
import ServicePage from './ServicePage/ServicePage';
import AboutPage from './AboutPage/AboutPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ServicePage />
        <AboutPage />
      </div>
    );
  }
}

export default App;
