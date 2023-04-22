import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  // createBrowserRouter,
  // createRoutesFromElements,
  // RouterProvider
} from "react-router-dom";

import { Header } from './components/Header/Header';
import { Home } from './containers/home';
import './App.css';

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
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Home/>} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
