import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products (you can replace with your backend API)
  useEffect(() => {
    fetch("/api/products") // replace with your actual API endpoint
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <header className="main-header">
        <h1>
          👕 Talk2Trend
          <button id="cartVoiceBtn" onClick={() => startCartVoice()} title="Voice Control">
            🎤
          </button>
          <button id="cartVoiceBtn" onClick={() => stopCartVoice()} title="Voice Control">
            🔴
          </button>
        </h1>
        <div className="welcome-message" id="welcome">
          Welcome 👋
        </div>
        <button
          id="darkModeToggle"
          aria-label="Toggle dark mode"
          style={{
            marginLeft: 16,
            padding: "8px 12px",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            background: "#fff",
            color: "#1e3c72",
            fontWeight: 600
          }}
        >
          🌙
        </button>
      </header>

      <nav className="main-nav">
        <a href="/" className="main-nav__link">
          Home
        </a>
        <a href="/products" className="main-nav__link main-nav__link--active">
          Products
        </a>
        <a href="/cart" className="main-nav__link">
          Cart
        </a>
        <a href="/login" className="main-nav__link">
          Login
        </a>
        <a href="/signup" className="main-nav__link">
          Signup
        </a>
        <a href="/dashboard" className="main-nav__link">
          Dashboard
        </a>
      </nav>

      <section className="controls-section">
        <div className="control-group">
          <label htmlFor="categoryFilter">Category:</label>
          <select id="categoryFilter">
            <option value="all">All Categories</option>
          </select>
        </div>
        <div className="control-group">
          <label htmlFor="priceSort">Sort by Price:</label>
          <select id="priceSort">
            <option value="default">Default</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </section>

      <h2 className="products-section-heading">Our Latest Collection</h2>

      <section className="products-grid" id="productsGrid">
        {loading ? (
          <p className="info-message">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="info-message">No products available.</p>
        ) : (
          products.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.image} alt={product.title} className="product-card__image" />
              <h3 className="product-card__title">{product.title}</h3>
              <p className="product-card__price">₹{product.price}</p>
              <button className="product-card__add-to-cart">Add to Cart</button>
            </div>
          ))
        )}
      </section>

      <footer className="main-footer">
        © 2025 Talk2Trend. All rights reserved.
      </footer>
    </>
  );
}

export default Products;
