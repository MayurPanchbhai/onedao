/** @format */
import React, { useState } from "react"; // Path to your background image
import profilePic from "../assets/bgImage.jpg";
import { Link, useNavigate } from "react-router-dom";
export function Login() {
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

    setMessage("User created successfully");
    setFormdata({ email: "", password: "" });

    setTimeout(() => {
      navigate("/login", { replace: true });
    }, 1200);
  };
  return (
    <div className="container d-flex h-100 justify-content-center align-items-center bg-white p-3">
      {/* Container Card with subtle shadow and rounded corners */}
      <div
        className="card border-0 shadow-lg overflow-hidden w-75"
        style={{ maxWidth: "940px", borderRadius: "24px" }}>
        <div className="row g-0 align-items-stretch">
          <div className="col-md-6 d-none d-md-flex position-relative">
            <img
              src={profilePic}
              alt="Mountain Abstract Background"
              className="w-100 object-fit-cover position-absolute top-0 start-0"
              style={{ height: "100%" }}
            />
          </div>

          {/* Right Side: Form Panel */}
          <div className="col-md-6 d-flex align-items-center bg-white p-4 p-lg-5">
            <div className="w-100 position-relative">
              {/* Header Titles */}
              <h2
                className="fw-bold text-dark mb-2"
                style={{ fontSize: "1.85rem" }}>
                Login In to Admin Panel
              </h2>
              {!message ? (
                <p className="text-denger  small">
                  Enter your email id and password below
                </p>
              ) : (
                <p className="text-muted  small">{message}</p>
              )}

              {/* Interactive Form Elements */}
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
                    className="form-control py-2 px-3 text-secondary border border-secondary-subtle"
                    placeholder="Enter your email id"
                    style={{ borderRadius: "8px" }}
                  />
                </div>

                {/* Password Field */}
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
                    className="form-control py-2 px-3 text-secondary border border-secondary-subtle"
                    placeholder="Enter your password"
                    style={{ borderRadius: "8px" }}
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="btn btn-dark w-100 py-2.5 fw-medium mb-4"
                  style={{ borderRadius: "8px", backgroundColor: "#111" }}>
                  Login
                </button>

                {/* Redirect Text Link */}
                <div className="text-center">
                  <span className="text-muted small">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="text-dark fw-bold text-decoration-none ms-1">
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
