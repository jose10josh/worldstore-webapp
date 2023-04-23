import React from 'react';
import './styles/Cart.css'

const Cart = () => {
  return (
    <div className="Cart">
      <div className="Cart-content">
        <h3>Lista de Pedidos:</h3>
        <div className="Cart-item">
          <div className="Cart-element">
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
          <button type="button">Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export {Cart};