/** @format */

import React, { useState } from "react";
import profilePic from "../assets/bgImage.jpg";
import { Link, useNavigate } from "react-router-dom";

export function Register() {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [showOtpView, setShowOtpView] = useState(false);
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

    if (!formdata.confirmPassword || formdata.confirmPassword.trim() === "") {
      setMessage("Confirm Password cannot be empty");
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

    if (formdata.password !== formdata.confirmPassword) {
      setMessage("Password does not match");
      return;
    }

    // Clear old errors and open the OTP view smoothly
    setMessage("");
    setShowOtpView(true);
  };

  const handleOtpChange = (element, index) => {
    if (!/^[0-9]$/.test(element.value) && element.value !== "") return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  // ✅ Added missing backspace key handler to prevent screen errors
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otp[index] && e.target.previousSibling) {
        e.target.previousSibling.focus();
      } else {
        let newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  // ✅ Added missing onSubmit processing function to stop execution crashes
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const fullCode = otp.join("");

    if (fullCode.length < 6) {
      setMessage("Please fill out the full 6-digit verification code");
      return;
    }

    setMessage("User created successfully! Redirecting...");

    setTimeout(() => {
      setFormdata({ email: "", password: "", confirmPassword: "" });
      setOtp(new Array(6).fill(""));
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
          {/* Left Side: Image Banner */}
          <div className="col-md-6 d-none d-md-flex position-relative">
            <img
              src={profilePic}
              alt="Mountain Abstract Background"
              className="w-100 object-fit-cover position-absolute top-0 start-0"
              style={{ height: "100%" }}
            />
          </div>

          {/* Right Side: Form Panel Area Container */}
          <div className="col-md-6 d-flex align-items-center bg-white p-4 p-lg-5">
            <div className="w-100 position-relative">
              {!showOtpView ? (
                <>
                  <h2
                    className="fw-bold text-dark mb-2"
                    style={{ fontSize: "1.85rem" }}>
                    Register to Admin Panel
                  </h2>
                  {!message ? (
                    <p className="text-danger small">
                      Enter your details below to create an account
                    </p>
                  ) : (
                    <p className="text-danger small">{message}</p>
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

                    {/* Confirm Password Field */}
                    <div className="mb-4">
                      <label
                        className="form-label fw-bold text-uppercase tracking-wider small mb-1"
                        style={{ fontSize: "0.75rem" }}>
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formdata.confirmPassword || ""}
                        onChange={handleChange}
                        className="form-control py-2 px-3 text-secondary border border-secondary-subtle"
                        placeholder="Enter your confirm password"
                        style={{ borderRadius: "8px" }}
                      />
                    </div>

                    {/* Submit Action Button */}
                    <button
                      type="submit"
                      className="btn btn-dark w-100 py-2.5 fw-medium mb-4"
                      style={{ borderRadius: "8px", backgroundColor: "#111" }}>
                      Register
                    </button>

                    {/* Redirect Text Link */}
                    <div className="text-center">
                      <span className="text-muted small">
                        Already have an account?{" "}
                        <Link
                          to="/login"
                          className="text-dark fw-bold text-decoration-none ms-1">
                          Login
                        </Link>
                      </span>
                    </div>
                  </form>
                </>
              ) : (
                /* ========================================================= */
                /* VIEW B: OPTIMIZED NUMERIC OTP VERIFICATION PANEL          */
                /* ========================================================= */
                <div className="text-center px-1 py-3">
                  <h2
                    className="fw-bold text-dark mb-2"
                    style={{ fontSize: "1.9rem" }}>
                    Verify your email
                  </h2>
                  <p
                    className="text-muted mb-4 small"
                    style={{ color: "#a5a5a5" }}>
                    Enter the OTP from your register email id
                  </p>

                  <form onSubmit={handleOtpSubmit}>
                    <div
                      className="d-flex justify-content-between gap-2 mb-4 mx-auto"
                      style={{ maxWidth: "360px" }}>
                      {otp.map((data, index) => (
                        <input
                          key={index}
                          type="tel"
                          pattern="[0-9]*"
                          inputMode="numeric"
                          maxLength="1"
                          value={data}
                          onChange={(e) => handleOtpChange(e.target, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          onFocus={(e) => e.target.select()}
                          className="form-control text-center p-0 fw-semibold text-dark border border-secondary-subtle"
                          style={{
                            width: "46px",
                            height: "46px",
                            fontSize: "1.2rem",
                            borderRadius: "8px",
                          }}
                        />
                      ))}
                    </div>

                    {message && (
                      <p className="text-danger small mb-3">{message}</p>
                    )}

                    {/* Proceed Form Action Button */}
                    <button
                      type="submit"
                      className="btn btn-dark w-100 py-2.5 fw-medium"
                      style={{ borderRadius: "10px", backgroundColor: "#111" }}>
                      Proceed
                    </button>

                    {/* Return switch link */}
                    <button
                      type="button"
                      onClick={() => setShowOtpView(false)}
                      className="btn btn-link text-muted small mt-3 text-decoration-none">
                      ← Back to Login
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
