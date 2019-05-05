import React from 'react';
import './App.css';
import InfoBox from './components/InfoBox';
import Carosel from './components/carosel/Carosel';

function App() {
  return (
    <div className="section">
      <Carosel />
      <InfoBox />
    </div>
  );
}

export default App;
