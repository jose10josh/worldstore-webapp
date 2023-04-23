import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../app/hooks';
import { selectIsDarkMode, setDarkMode } from '../../slices/uiSlice';

import './Header.css';

function Header() {
  const dispatch = useAppDispatch();
  const darkMode = useSelector(selectIsDarkMode);

  const handleDarkMode = () => {
    dispatch(setDarkMode(!darkMode));
  };

  return (
    <div className="Header">
      <h1>World Store</h1>
      <div className='Header-menu'>
        <button type="button" onClick={handleDarkMode}>
          {darkMode ? 'DarkMode' : 'LightMode'}
        </button>
        <Link to="/">Inicio</Link>
        <Link to="/cart">Carrito</Link>
        <Link to="/checkout">Checkout</Link>

      </div>
    </div>
  );
}

export { Header };
