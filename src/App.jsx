import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';

import './CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <header className="App-header">
          <h1 className="App-title">My first React Web!</h1>
        </header>
      <Footer />
      </div>
    );
  }
}

export default App;
