import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles/ProductDetail.css';
import { API } from '../utils/API';
import { useGetSingleProduct } from '../hooks/useGetSingleProduct';
import { selectLoading } from '../slices/uiSlice';
import { useAppDispatch } from '../app/hooks';
import { setAddToCart } from '../slices/cartSlice';


const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {id} = useParams();
  const { prodData, error } = useGetSingleProduct(`${API}/products/${id}`);
  const [qty, setQty] = useState(1);
  const loading = useSelector(selectLoading);

  const handleAddToCart = () => {
    if(!prodData) {
      return
    }
    const addToCart = {
      id:prodData.id,
      product: prodData,
      qty,
    }
    dispatch(setAddToCart(addToCart));
    navigate('/cart')
  }

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if(!prodData) {
    return <p>Invalid product</p>
  }

  if(error) {
    return <p>An error ocurred</p>
  }

  return (
    <div className="ProductDetail">
      <div className="product-image">
        <img src={prodData.image} alt='' />
      </div>
      <div className="product-info">
        <h1>{prodData.title}</h1>
        <h2>Precio: ${prodData.price}</h2>
        <p>{prodData.description}</p>
        <div>
          <label htmlFor="cantidad">Cantidad:</label>
          <div className="qty-spinner">
            <button type="button" className="spinner-btn" onClick={() => {if(qty===1) return; setQty(qty-1)}}>-</button>
            <input type="number" id="cantidad" value={qty} className="spinner-qty" disabled />
            <button type="button" className="spinner-btn" onClick={() => {setQty(qty+1)}}>+</button>
          </div>
        </div>
        <button className='addToCart' type='button' onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export {ProductDetail};