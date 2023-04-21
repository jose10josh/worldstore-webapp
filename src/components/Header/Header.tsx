import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../app/hooks';
import { selectIsDarkMode, setDarkMode } from '../../slices/uiSlice';

import './Header.css'

const Header = () => {
  const dispatch = useAppDispatch()
  const darkMode = useSelector(selectIsDarkMode)

  const handleDarkMode = () => {
    dispatch(setDarkMode(!darkMode));
  }

  return (
    <div className='Header'>
      <h1>World Store</h1>
      <button type='button' onClick={handleDarkMode}>{darkMode ? "DarkMode" : "LightMode"}</button>
    </div>
  );
};

export {Header};