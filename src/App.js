import React, { createContext, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import{CartContextProvider} from './context/CartContext'


function App() {
 
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="All Products" />}
            />
            <Route
              path="category/:categoryId"
              element={<ItemListContainer greeting="Productos filtrados" />}
            />
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>      
    </div>
  );
}

export default App;
