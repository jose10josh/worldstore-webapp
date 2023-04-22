import React from 'react';
import { ProductList } from '../components/ProductList/ProductList';
import { SearchBar } from '../components/SearchBar/SearchBar';

function Home() {
  return (
    <div className="Home">
      <SearchBar />
      <ProductList />
    </div>
  );
}

export {Home};
