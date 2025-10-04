import React from 'react';
import Login from './login';
import { Link } from "react-router-dom";
// This is a single, self-contained React component for the e-commerce home page.
// All the necessary HTML (as JSX) and CSS are included here.

function Home() {

  // Placeholder functions for button interactions.
  // In a real app, these would contain logic for voice control and theme switching.
  const startCartVoice = () => {
    console.log("Starting voice control...");
    document.getElementById('cartVoiceBtn').classList.add('listening');
  };

  const stopCartVoice = () => {
    console.log("Stopping voice control...");
    document.getElementById('cartVoiceBtn').classList.remove('listening');
  };

  const handleShopNow = () => {
    // In a React app, you would use a router to navigate.
    // For this example, we'll log to the console.
    console.log("Navigating to products page...");
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
  };


  return (
    <>
      {/* This <style> tag contains all the CSS needed for the component. */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Playfair+Display:wght@700&display=swap');
          
          /* Base Styles */
          :root {
            --bg: #f0f4ff;
            --card-bg: #ffffff;
            --header-bg: linear-gradient(90deg, #1e3c72, #2a5298);
            --nav-bg: #274caa;
            --text: #333;
            --price: #4CAF50;
            --btn-bg: #28a745;
            --btn-text: #fff;
            --shadow: rgba(0,0,0,0.15);
          }

          .dark {
            --bg: #0f111a;
            --card-bg: #1f2436;
            --header-bg: linear-gradient(90deg, #0d1b44, #1f295f);
            --nav-bg: #1a274f;
            --text: #e6e8ff;
            --price: #7ed957;
            --btn-bg: #256a3d;
            --btn-text: #fff;
            --shadow: rgba(0,0,0,0.6);
          }

          body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--bg);
            color: var(--text);
            line-height: 1.6;
            transition: background-color .3s, color .3s;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          /* --- Header --- */
          .main-header {
            background: var(--header-bg);
            padding: 20px 40px;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 10px var(--shadow);
            position: sticky;
            top: 0;
            z-index: 1000;
          }

          .main-header__logo {
            font-family: 'Playfair Display', serif;
            font-size: 2.2rem;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            gap: 15px;
          }

          .welcome-message {
            font-size: 1.1rem;
            font-weight: 600;
            color: #dbeafe;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
            transition: opacity 0.3s ease;
          }

          /* --- Navigation --- */
          .main-nav {
            background-color: var(--nav-bg);
            display: flex;
            justify-content: center;
            gap: 40px;
            padding: 15px 0;
            box-shadow: 0 2px 8px var(--shadow);
          }

          .main-nav__link {
            color: white;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            padding: 5px 10px;
            transition: all 0.3s ease;
            position: relative;
          }

          .main-nav__link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 3px;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #00bfff;
            transition: width 0.3s ease-out;
          }

          .main-nav__link:hover::after,
          .main-nav__link--active::after {
            width: 100%;
          }

          .main-nav__link:hover {
            color: #00bfff;
            transform: translateY(-2px);
          }

          /* --- Hero Section --- */
          .hero-section {
            background: linear-gradient(135deg, #a7e1f8, #e0f2ff);
            padding: 80px 20px;
            text-align: center;
            animation: slideInFromTop 1s ease-out;
            border-bottom-left-radius: 50px;
            border-bottom-right-radius: 50px;
            overflow: hidden;
            position: relative;
          }
          
          body.dark .hero-section {
             background: linear-gradient(135deg, #1a2a4f, #2a3b6a);
          }


          .hero-section::before,
          .hero-section::after {
            content: '';
            position: absolute;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50%;
            filter: blur(40px);
            z-index: 0;
          }

          .hero-section::before {
            width: 150px;
            height: 150px;
            top: 10%;
            left: 5%;
            animation: floatCircle 8s infinite alternate ease-in-out;
          }

          .hero-section::after {
            width: 200px;
            height: 200px;
            bottom: 15%;
            right: 10%;
            animation: floatCircle 10s infinite alternate-reverse ease-in-out;
          }

          @keyframes floatCircle {
            0% { transform: translate(0, 0) scale(1); opacity: 0.4; }
            100% { transform: translate(20px, 30px) scale(1.05); opacity: 0.6; }
          }

          @keyframes slideInFromTop {
            from { opacity: 0; transform: translateY(-50px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .hero-section__title {
            color: #1e3a8a;
            font-family: 'Playfair Display', serif;
            font-size: 3.8rem;
            margin-bottom: 15px;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
          }
           body.dark .hero-section__title {
              color: #cddcff;
           }

          .hero-section__subtitle {
            font-size: 1.5rem;
            color: #444;
            max-width: 700px;
            margin: 0 auto 30px auto;
          }
          
          body.dark .hero-section__subtitle {
            color: #a9b8d6;
          }

          .hero-section__cta-button {
            padding: 15px 35px;
            background: linear-gradient(45deg, #00bfff, #007bff);
            color: white;
            border: none;
            border-radius: 30px;
            font-size: 1.15rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 8px 15px rgba(0, 191, 255, 0.3);
            text-transform: uppercase;
            letter-spacing: 0.8px;
          }

          .hero-section__cta-button:hover {
            background: linear-gradient(45deg, #007bff, #00bfff);
            box-shadow: 0 12px 20px rgba(0, 191, 255, 0.5);
            transform: translateY(-4px) scale(1.02);
          }

          /* --- Product Section --- */
          .products-grid {
            padding: 60px 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 35px;
          }

          .product-card {
            background-color: var(--card-bg);
            border-radius: 15px;
            box-shadow: 0 8px 20px var(--shadow);
            max-width: 320px;
            text-align: center;
            padding: 25px;
            transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .product-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 30px var(--shadow);
          }
          
          .product-card__title {
             color: var(--text);
          }
          
          .product-card__price {
             color: var(--price);
          }
          
          .product-card__add-to-cart {
            background-color: var(--btn-bg);
            color: var(--btn-text);
          }

          /* --- Footer --- */
          .main-footer {
            background: var(--header-bg);
            color: white;
            text-align: center;
            padding: 25px;
            margin-top: 60px;
            box-shadow: 0 -4px 10px var(--shadow);
            transition: background .3s;
          }

          #cartVoiceBtn, #cartVoiceBtn2 {
            background-color: #ffffff20;
            color: #ffffff;
            border: none;
            width: 40px;
            height: 40px;
            font-size: 18px;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: background-color 0.3s ease, transform 0.2s ease;
          }

          #cartVoiceBtn:hover, #cartVoiceBtn2:hover {
            background-color: #ffffff30;
            transform: scale(1.05);
          }
          
          #darkModeToggle {
            margin-left: 16;
            padding: 8px 12px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            background: #fff;
            color: #1e3c72;
            font-weight: 600;
          }

          /* Listening animation */
          #cartVoiceBtn.listening {
            background-color: #10b981;
            animation: pulse 1.5s infinite;
          }

          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(16,185,129, 0.7); }
            70% { box-shadow: 0 0 0 12px rgba(16,185,129, 0); }
            100% { box-shadow: 0 0 0 0 rgba(16,185,129, 0); }
          }
        `}
      </style>

      <header className="main-header">
        <div className="main-header__logo">
          Talk2Trend
          <button id="cartVoiceBtn" onClick={startCartVoice} title="Start Voice Control">
            🎤
          </button>
          <button id="cartVoiceBtn2" onClick={stopCartVoice} title="Stop Voice Control">
            🔴
          </button>
        </div>
        <div className="welcome-message" id="welcome">
          Welcome 👋
        </div>
        <button id="darkModeToggle" aria-label="Toggle dark mode" onClick={toggleDarkMode}>
          🌙
        </button>
      </header>

      <nav className="main-nav">
        <a href="#home" className="main-nav__link main-nav__link--active">Home</a>
        
        <a href="#cart" className="main-nav__link">Cart</a>
        <Link to="/login" className="main-nav__link">Login</Link>
        <Link to="/Signup" className="main-nav__link">Signup</Link>
        <Link to="/product" className="main-nav__link">Products</Link>
        



        
        <a href="#dashboard" className="main-nav__link">Dashboard</a>
      </nav>

      <section className="hero-section">
        <h1 className="hero-section__title">Discover the Latest in Fashion</h1>
        <p className="hero-section__subtitle">
          Trendy, Affordable, and You. Elevate your style effortlessly.
        </p>
        <button className="hero-section__cta-button" onClick={handleShopNow}>
          Shop Now
        </button>
      </section>

      <section className="products-grid" id="productsGrid">
        {/* In a real app, product cards would be rendered here from state data */}
        <p className="info-message">Loading products...</p>
      </section>

      <footer className="main-footer">
        © 2025 Talk2Trend. All rights reserved.
      </footer>
    </>
  );
}

export default Home;

