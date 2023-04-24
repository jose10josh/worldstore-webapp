import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ProductList } from '../components/ProductList/ProductList';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { useAppDispatch } from '../app/hooks';
import { useGetProducts } from '../hooks/useGetProducts';
import { selectFilterProducts, setProducts } from '../slices/productSlice';
import { API } from '../utils/API';
import { selectLoading } from '../slices/uiSlice';

function Home() {
  const dispatch = useAppDispatch();
  const { error, prodList } = useGetProducts(`${API}/products`);

  const productList = useSelector(selectFilterProducts);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(setProducts(prodList));
  }, [dispatch, prodList]);



  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error loading products: {error.message}</p>;
  }

  return (
    <div className="Home">
      <SearchBar />
      <ProductList productList={productList} />
    </div>
  );
}

export {Home};
