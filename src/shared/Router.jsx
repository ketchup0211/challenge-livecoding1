import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Item from "../pages/Item";
import Cart from "../pages/Cart";
import { useState } from "react";

const Router = () => {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Item setCart={setCart} />}></Route>
        <Route path="/cart" element={<Cart cart={cart} />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
