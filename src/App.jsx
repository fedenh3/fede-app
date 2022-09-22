import './App.css';
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const CartContext = React.createContext('');
console.log('CartContext: ', CartContext);


function App() {
  return (    
    <>
      <BrowserRouter>
        <NavBar /> 
        <CartContext.Provider value='Fede'> 
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        </Routes> 
        </CartContext.Provider>  
      </BrowserRouter>
    </>
  );
}

export default App;
