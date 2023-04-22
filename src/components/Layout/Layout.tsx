import React from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import './Layout.css';

type Props = {
  children: JSX.Element
}

const Layout = ({children}:Props) => {
  return (
    <>
      <Header />
        <div className='Layout'>
          {children}
        </div>
      <Footer />
    </>
  );
};

export {Layout};