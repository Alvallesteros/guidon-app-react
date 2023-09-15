import React from 'react';
import './css/App.css';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <div id="background-container">
          <div className="background-image"></div>
          <div className="background-gradient"></div>
      </div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
