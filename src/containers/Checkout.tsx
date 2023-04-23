import React from 'react';
import './styles/Checkout.css';

const Checkout = () => {
  return (
    <section className="Checkout">
      
      <div className="Checkout-content">
        <div className="Checkout-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Checkout-form">
          <form action="">
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Lista de Pedidos:</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
        </div>

        <h3>Precio Total: $10</h3>
        <button type="button">Continuar pedido</button>
      </div>
    </section>
  );
};

export {Checkout};