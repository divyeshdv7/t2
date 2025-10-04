import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1443884590026-2e4d21aee71c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHN0b3JlfGVufDB8fDB8fHww')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="signup-container"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          padding: "50px",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "520px",
          boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
          backdropFilter: "blur(20px)",
          textAlign: "center",
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
          Create Account
        </h2>

        <form id="signupForm">
          <input
            type="text"
            placeholder="Full Name"
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
              background: "linear-gradient(45deg, #00bfff, #007bff)",
              color: "#fff",
              border: "none",
              fontSize: "18px",
              fontWeight: 600,
              borderRadius: "10px",
              cursor: "pointer",
              marginTop: "25px",
            }}
          >
            Sign Up
          </button>
        </form>

        <div style={{ marginTop: "30px", color: "#e0f2ff" }}>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#fff",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
