import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import MainNavBar from './components/MainNavBar';
import IntroSection from './components/IntroSection';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <MainNavBar />
      <IntroSection />
    </div>
  );
}

export default App;
