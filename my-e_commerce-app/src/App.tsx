import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './app/screens/Home/Index'
import Login from './app/screens/Login/Index'
import './App.css'
import CartDetail from './app/screens/CartDetail';
import Categories from './app/screens/Categories';
import Products from './app/screens/Products';
import Register from './app/screens/Register/Index';
import ProdMod from './app/screens/ProdMod';
import ProdCreate from './app/screens/ProdCreate';
import ProdDetail from './app/screens/ProdDetail';
import { QueryClient, QueryClientProvider } from 'react-query';
import CatDetail from './app/screens/categoriesdetail';

function App() {
  const queryClient = new QueryClient();

  return (
  <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
         {/* <Route element={<Layout />}>*/}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:id" element={<CatDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProdDetail />} />
            <Route path="/cart-detail" element={<CartDetail />} />
          {/*</Route>*/}
          <Route path="/products/create" element={<ProdCreate />} />
          <Route path="/products/id/:id" element={<ProdMod />} />
          {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

    </>
  )
}

export default App
