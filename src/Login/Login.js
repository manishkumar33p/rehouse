import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const role = searchParams.get("role");

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isDashboard = role === "dashboard";

  const title = isDashboard
    ? "Dashboard Login"
    : "Post Property Login";

  const subtitle = isDashboard
    ? "Enter your password to access your dashboard."
    : "Login to post your property on Noida Extension Property.";

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    /*
      TEMPORARY FRONTEND PASSWORDS

      Post Property Password:
      post123

      Dashboard Password:
      admin123
    */

    if (!isDashboard && password === "post123") {

      navigate("/post-property");

    } else if (isDashboard && password === "admin123") {

      navigate("/dashboard");

    } else {

      setError("Incorrect password. Please try again.");

    }
  };

  return (
    <main className="login-page">

      <div className="login-background"></div>

      <div className="login-card">

        <div className="login-logo">
          <div className="login-logo-mark">
            NEP
          </div>

          <div>
            <strong>NOIDA EXTENSION</strong>
            <span>PROPERTY</span>
          </div>
        </div>


        <div className="login-header">

          <span className="login-label">
            SECURE ACCESS
          </span>

          <h1>{title}</h1>

          <p>{subtitle}</p>

        </div>


        <form onSubmit={handleLogin}>

          <div className="login-field">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

          </div>


          {error && (
            <div className="login-error">
              {error}
            </div>
          )}


          <button
            type="submit"
            className="login-button"
          >
            {isDashboard
              ? "Login to Dashboard"
              : "Continue to Post Property"}
          </button>

        </form>


        <button
          className="login-back"
          onClick={() => navigate("/")}
        >
          ← Back to Website
        </button>

      </div>

    </main>
  );
}

export default Login;