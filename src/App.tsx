import React from 'react';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';
import { SearchBar } from './components/SearchBar/SearchBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <ProductList/>
    </div>
  );
}

export default App;
