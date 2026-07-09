/** @format */
import React, { useEffect, useState } from "react";
import profilePic from "../assets/bgImage.jpg";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const userDetails = JSON.parse(localStorage.getItem("UserLoginDetails"));
  console.log("saved details", userDetails);

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formdata.email || formdata.email.trim() === "") {
      setMessage("Email ID cannot be empty");
      return;
    }

    if (!formdata.password || formdata.password.trim() === "") {
      setMessage("Password cannot be empty");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formdata.email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    if (formdata.password.length < 6) {
      setMessage("Password must be at least 6 characters long");
      return;
    }

    if (!userDetails) {
      setMessage("No account details found. Please register first.");
      return;
    }

    if (
      userDetails.email !== formdata.email ||
      userDetails.password !== formdata.password
    ) {
      setMessage("Invalid email or password");
      return;
    }

    setMessage("Logged in successfully! Redirecting...");
    setTimeout(() => {
      navigate("/dashboard", { replace: true });
    }, 1200);
  };

  return (
    <div className="container d-flex h-100 justify-content-center align-items-center bg-white p-3">
      <div
        className="card border-0 shadow-lg overflow-hidden w-75"
        style={{ maxWidth: "940px", borderRadius: "24px" }}>
        <div className="row g-0 align-items-stretch">
          {/* Left Side: Image Banner */}
          <div className="col-md-6 d-none d-md-flex position-relative">
            <img
              src={profilePic}
              alt="Mountain Abstract Background"
              className="w-100 object-fit-cover position-absolute top-0 start-0"
              style={{ height: "100%" }}
            />
          </div>

          <div
            className="col-md-6 d-flex align-items-center bg-white p-4 p-lg-5"
            style={{ minHeight: "550px" }}>
            <div className="w-100 position-relative">
              {/* Header Titles */}
              <h2 className="fw-semibold text-center text-dark mb-2 fs-4">
                Log In to Admin Panel
              </h2>
              {!message ? (
                <p
                  className="text-center small"
                  style={{ fontSize: "0.88rem", color: "#9FA2B4" }}>
                  Enter your email id and password below
                </p>
              ) : (
                <p className="text-success text-center small fw-medium">
                  {message}
                </p>
              )}

              <form onSubmit={handleSubmit}>
                {/* Email ID Field */}
                <div className="mb-3">
                  <label
                    className="form-label fw-bold text-uppercase tracking-wider small mb-1"
                    style={{ fontSize: "0.75rem" }}>
                    Email ID
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formdata.email || ""}
                    onChange={handleChange}
                    className="form-control py-2 px-3 text-secondary border border-secondary-subtle custom-placeholder"
                    placeholder="Enter your email id"
                    style={{ borderRadius: "8px" }}
                  />
                </div>

                <div className="mb-3">
                  <label
                    className="form-label fw-bold text-uppercase tracking-wider small mb-1"
                    style={{ fontSize: "0.75rem" }}>
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formdata.password || ""}
                    onChange={handleChange}
                    className="form-control py-2 px-3 text-secondary border border-secondary-subtle custom-placeholder"
                    placeholder="Enter your password"
                    style={{ borderRadius: "8px" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-dark w-100 py-2.5 fw-medium mb-4"
                  style={{ borderRadius: "8px", backgroundColor: "#111" }}>
                  Login
                </button>

                <div className="text-center">
                  <span className="small" style={{ color: "#9FA2B4" }}>
                    Don't have an account?{" "}
                    <Link
                      to="/"
                      className="text-dark text-decoration-none ms-1">
                      Register
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
