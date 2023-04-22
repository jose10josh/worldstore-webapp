import React from 'react';
import { ProductModel } from '../../models/ProductModel';

import './ProductCard.css';
import { useAppDispatch } from '../../app/hooks';
import { setFavorite } from '../../slices/productSlice';

type Props = {
  product: ProductModel
}

const ProductCard = ({product}:Props) => {
  const dispatch = useAppDispatch()

  const handleSetFavorite = (product:ProductModel) => {
    dispatch(setFavorite(product));
  }


  return (
    <div className='ProductCard'>
      <button type='button' onClick={() => handleSetFavorite(product)}>{product.favorite ? "Favorite" : "NOTFAV"}</button>
      <h5>{product.title}</h5>
    </div>
  );
};

export {ProductCard};