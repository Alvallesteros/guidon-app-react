import React from 'react';
import './css/App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div id="background-container">
          <div className="background-image"></div>
          <div className="background-gradient"></div>
      </div>
      <Header />
    </div>
  );
}

export default App;
