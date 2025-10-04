import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZSUyMGNvbW1lcmNlJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="login-container"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          padding: "50px",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "520px",
          backdropFilter: "blur(20px)",
          textAlign: "center",
          boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
        }}
      >
        <h2
          style={{
            color: "#fff",
            marginBottom: "30px",
            fontSize: "2.5em",
            fontWeight: 700,
          }}
        >
          Welcome Back
        </h2>

        <form id="loginForm">
          <input
            type="email"
            placeholder="Email Address"
            required
            style={{
              width: "calc(100% - 24px)",
              padding: "14px 12px",
              margin: "10px 0",
              borderRadius: "10px",
              border: "none",
              fontSize: "17px",
              outline: "none",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={{
              width: "calc(100% - 24px)",
              padding: "14px 12px",
              margin: "10px 0",
              borderRadius: "10px",
              border: "none",
              fontSize: "17px",
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              background:
                "linear-gradient(45deg, #00bfff, #007bff)",
              color: "#fff",
              border: "none",
              fontSize: "18px",
              fontWeight: 600,
              borderRadius: "10px",
              cursor: "pointer",
              marginTop: "25px",
            }}
          >
            Login
          </button>
        </form>

        <div style={{ marginTop: "30px", color: "#e0f2ff" }}>
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "#fff",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
