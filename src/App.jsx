import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";

// Pages
import Home from "./pages/index";
import Login from "./pages/login";
import Products from "./pages/product";

// Placeholder pages (empty for now)


function Cart() { return <h1>Cart Page</h1>; }
function Dashboard() { return <h1>Dashboard Page</h1>; }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
