import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import MainNavBar from './components/MainNavBar';
import IntroSection from './components/IntroSection';
import ProductsGrid from './components/ProductsGrid';
import CustomerReviews from './components/CustomerReviews';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <MainNavBar />
      <IntroSection />
      <ProductsGrid />
      <CustomerReviews />
    </div>
  );
}

export default App;
