import React from 'react'
import "./App.css"
import Navbar from "./components/navbar/Navbar";
import Cards from "./components/shopcards/Cards"
import Basket from "./components/addedItems/Basket"
import { Routes, Route } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import Favorites from './components/favorites/Favorites';


function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Cards />} />
        <Route
          path="/added-items"
          element={<Basket />} />
        <Route
          path="/favorite-items"
          element={<Favorites />} />
        <Route path="*" element={<div>Error 404 not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
