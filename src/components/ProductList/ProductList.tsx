import React from 'react';

import { ProductCard } from '../ProductCard/ProductCard';
import { ProductModel } from '../../models/ProductModel';
import './ProductList.css';

type Props = {
  productList:ProductModel[]
}

const ProductList = ({productList}:Props) => {
  return (
    <div className="ProductList">
      {productList.map((item) => (
        <ProductCard product={item} key={item.id} />
      ))}
    </div>
  );
}

export { ProductList };
