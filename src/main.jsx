import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Product from "./pages/products/Products.jsx";
import Cart from "./pages/cart/Cart.jsx";
import RootLayout from "./components/layouts/root-layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<Product />} />
          <Route path="/carts" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

