import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../slices/cartSlice';
import './styles/Cart.css'

const Cart = () => {
  const cartData = useSelector(selectCart);

  return (
    <div className="Cart">
      <div className="Cart-content">
        <h3>Lista de Pedidos:</h3>
        {cartData.products.map(product => (
          <div className="Cart-item">
            <div className="Cart-element">
              <h4>{product.product.title}</h4>
              <span>${product.product.price}</span>
            </div>
            <button type="button">Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export {Cart};