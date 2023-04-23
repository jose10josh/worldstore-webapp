import React from 'react';
import { ProductModel } from '../../models/ProductModel';
import { useAppDispatch } from '../../app/hooks';
import { setFavorite } from '../../slices/productSlice';
import './ProductCard.css';

type Props = {
  product: ProductModel;
};

const ProductCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const handleSetFavorite = (item: ProductModel, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatch(setFavorite(item));
  };

  // function splitText(text:string) {
  //   const maxLength = 100;
  //   if (text.length <= maxLength) {
  //     return [text];
  //   }
  //   return `${text.slice(0, maxLength - 10)}...`;
  // }

  return (
    <a href={`/product?id=${product.id}`} className="Products-item">
      <figure>
        <button className='favorite' type="button" onClick={(event) => handleSetFavorite(product, event)}>
          {product.favorite ? 'Favorite' : 'NOTFAV'}
        </button>
        <img src={product.image} alt={product.title} />
      </figure>
      <div className="Products-item-info">
          <h6 className='price'>${product.price}</h6>
          <h2 className='title'>{product.title}</h2>
      </div>
      <div className="overlay">
        <h2>{product.title}</h2>
        <p>Add to Cart</p>
      </div>
    </a>
  );
}

export { ProductCard };
