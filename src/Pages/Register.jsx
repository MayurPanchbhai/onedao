/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilePic from "../assets/bgImage.jpg";
import { useData } from "../Context/Datacontext";

export function Register() {
  const [message, setMessage] = useState("");
  const [formdata, setFormdata] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const [showOtpView, setShowOtpView] = useState(false);

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
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

    setMessage("");
    setShowOtpView(true);

    //storing data to the localstorage for login
    localStorage.setItem(
      "UserLoginDetails",
      JSON.stringify({ email: formdata.email, password: formdata.password }),
    );
  };
  const handleOtpChange = (element, index) => {
    if (!/^[0-9]$/.test(element.value) && element.value !== "") return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value && element.nextSibling) {
      element.nextSibling.focus();
    }

    const fullCode = newOtp.join("");
    if (fullCode.length === 6) {
      setMessage("Verification complete! Redirecting...");
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 2000);
    }
  };

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

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const fullCode = otp.join("");
    if (fullCode.length < 6) {
      setMessage("Please fill out the full 6-digit verification code");
      return;
    }
    setTimeout(() => {
      navigate("/login", { replace: true });
    }, 2000);
  };

  return (
    <div className="container d-flex h-100 justify-content-center align-items-center bg-white p-3">
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

          <div
            className="col-md-6 d-flex align-items-center bg-white p-4 p-lg-5"
            style={{ minHeight: "550px" }}>
            <div className="w-100 position-relative ">
              {!showOtpView ? (
                <>
                  <h2 className="fw-bold text-dark fs-4 mb-2 text-center">
                    Register to Admin Panel
                  </h2>
                  {!message ? (
                    <p
                      className=" mt-3 small text-center"
                      style={{ fontSize: "0.88rem", color: "#9FA2B4" }}>
                      Enter your phone number and password below
                    </p>
                  ) : (
                    <p className="text-danger small text-center  ">{message}</p>
                  )}

                  <form onSubmit={handleSubmit}>
                    {/* Email ID Field */}
                    <div className="mb-3">
                      <label
                        className="form-label fw-bold text-uppercase small mb-1"
                        style={{ fontSize: "0.75rem" }}>
                        Email ID
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formdata.email || ""}
                        onChange={handleChange}
                        className="form-control py-2 px-3  border border-secondary-subtle custom-placeholder rounded-2"
                        placeholder="Enter your email id"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        className="form-label fw-bold text-uppercase  small mb-1"
                        style={{ fontSize: "0.75rem" }}>
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formdata.password || ""}
                        onChange={handleChange}
                        className="form-control py-2 px-3 text-secondary border border-secondary-subtle custom-placeholder rounded-2"
                        placeholder="Enter your password"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className="form-label fw-bold text-uppercase small mb-1"
                        style={{ fontSize: "0.75rem" }}>
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formdata.confirmPassword || ""}
                        onChange={handleChange}
                        className="form-control py-2 px-3 text-secondary border border-secondary-subtle custom-placeholder rounded-2 
                        "
                        placeholder="Enter your confirm password"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-dark w-100 py-2.5 fw-medium mb-4"
                      style={{ borderRadius: "8px", backgroundColor: "#111" }}>
                      Register
                    </button>

                    <div className="text-center">
                      <span className=" small" style={{ color: "#9FA2B4" }}>
                        Already have an account?{" "}
                        <Link
                          to="/login"
                          className="text-dark  text-decoration-none ms-1">
                          Login
                        </Link>
                      </span>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center px-1 py-3">
                  <h2 className="fw-semibold text-dark fs-4 mb-2">
                    Verify your email
                  </h2>
                  <p
                    className=" mb-4 small fw-normal"
                    style={{ color: "#9FA2B4" }}>
                    Enter the OTP from your registered email id
                  </p>

                  <form onSubmit={handleOtpSubmit}>
                    <div
                      className="d-flex justify-content-between gap-1 gap-sm-2 mb-4 mx-auto w-100"
                      style={{ maxWidth: "320px" }}>
                      {otp.map((data, index) => (
                        <input
                          key={index}
                          type="tel"
                          pattern="[0-9]*"
                          inputMode="numeric"
                          maxLength={1}
                          value={data}
                          onChange={(e) => handleOtpChange(e.target, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          onFocus={(e) => e.target.select()}
                          className=" form-control text-center p-0 fw-semibold text-dark border border-secondary-subtle custom-placeholder otp-input"
                        />
                      ))}
                    </div>

                    {message && (
                      <p className="text-danger small mb-3">{message}</p>
                    )}

                    <button
                      type="submit"
                      className="btn btn-dark w-100 py-2 fw-normal ">
                      Proceed
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
