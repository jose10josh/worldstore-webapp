import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  // createBrowserRouter,
  // createRoutesFromElements,
  // RouterProvider
} from "react-router-dom";

import { Home } from './containers/home';
import { Layout } from './components/Layout/Layout';

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
          <Route path="/cart" element={<Home/>} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
