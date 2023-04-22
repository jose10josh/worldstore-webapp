import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ProductCard } from '../ProductCard/ProductCard';
import { selectFilterProducts, setProducts } from '../../slices/productSlice';
import { API } from '../../utils/API';
import { useGetProducts } from '../../hooks/useGetProducts';

import './ProductList.css'
import { useAppDispatch } from '../../app/hooks';

const ProductList = () => {
  const dispatch = useAppDispatch()
  const {loading, error, prodList} = useGetProducts(`${API}/products`);

  const productList = useSelector(selectFilterProducts)

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
    <div className='ProductList'>
      {productList.map(item => (
        <ProductCard product={item} key={item.id} />
      ))}
    </div>
  );
};

export {ProductList};