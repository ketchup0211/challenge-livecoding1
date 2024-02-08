import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Item from "../pages/Item";
import Cart from "../pages/Cart";
import { useState } from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Item />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
