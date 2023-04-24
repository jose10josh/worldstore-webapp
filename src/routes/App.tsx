import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  // createBrowserRouter,
  // createRoutesFromElements,
  // RouterProvider
} from "react-router-dom";

import { Home } from '../containers/Home';
import { Layout } from '../components/Layout/Layout';
import { Checkout } from '../containers/Checkout';
import { Cart } from '../containers/Cart';
import { Payment } from '../containers/Payment';
import { ProductDetail } from '../containers/ProductDetail';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path='/' element={<Home />} />
//       <Route path='/cart' element={<Home />} />
//       <Route path='*' element={<p>Not Found</p>} />
//     </>
//   )
// );

function App() {
  return (
    // <>
    //   <Header />
    //   <RouterProvider router={router} />
    // </>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/checkout/payment" element={<Payment/>} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
