import React from 'react';
import { ProductModel } from '../../models/ProductModel';
import { useAppDispatch } from '../../app/hooks';
import { setFavorite } from '../../slices/productSlice';
import './ProductCard.css';

type Props = {
  product: ProductModel;
};

function ProductCard({ product }: Props) {
  const dispatch = useAppDispatch();

  const handleSetFavorite = (item: ProductModel) => {
    dispatch(setFavorite(item));
  };

  return (
    <div className="ProductCard">
      <button type="button" onClick={() => handleSetFavorite(product)}>
        {product.favorite ? 'Favorite' : 'NOTFAV'}
      </button>
      <h5>{product.title}</h5>
    </div>
  );
}

export { ProductCard };
