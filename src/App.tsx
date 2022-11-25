import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import MainNavBar from './components/MainNavBar';
import IntroSection from './components/IntroSection';
import ProductInfoCard from './components/ProductInfoCard';
import ProductsGrid from './components/ProductsGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <MainNavBar />
      <IntroSection />
      <ProductsGrid />
    </div>
  );
}

export default App;
