/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faThLarge,
  faClipboardList,
  faCar,
  faUsers,
  faUserCheck,
  faClock,
  faMapMarkerAlt,
  faShieldAlt,
  faSlidersH,
  faSignOutAlt,
  faChevronRight,
  faChevronLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { KnowledgeBaseCard } from "../components/KnowledgeBaseCard";
import { UserList } from "../components/UserList";
import { TopDiverslist } from "../components/TopDiverslist";

export function Dashboard() {
  // State hook to track the currently active tab
  const [activeTab, setActiveTab] = useState("Dashboard");

  // List of all navigation items to map out cleaner markup code
  const menuItems = [
    { label: "Dashboard", icon: faThLarge },
    { label: "Orders", icon: faClipboardList },
    { label: "Rides", icon: faCar },
    { label: "Clients", icon: faUsers },
    { label: "Drivers", icon: faUserCheck },
    { label: "Shift", icon: faClock },
    { label: "Live map", icon: faMapMarkerAlt },
    { label: "Car classes", icon: faCar },
    { label: "Branches", icon: faMapMarkerAlt },
    { label: "Moderators", icon: faShieldAlt },
    { label: "Settings", icon: faSlidersH },
  ];

  return (
    <div
      className="dashboard-wrapper container-fluid min-vh-100 p-0 d-flex"
      style={{ backgroundColor: "#11141a" }}>
      {/* Dynamic Style Injection for the active tab scoop curves */}

      <div
        className="d-flex flex-column text-white ps-2 py-4"
        style={{ width: "260px", backgroundColor: "#11141a" }}>
        <div className="d-flex align-items-center mb-4 p-2 pb-3 border-bottom border-secondary border-opacity-25">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0mA3kZ2hNROp77tbF_UaMAqJSL5oCsFKQrZ8XkpaUjxO2mWwUkfg_k_6M&s=10"
            className="bg-secondary rounded-circle me-3"
            style={{ width: "45px", height: "45px" }}
          />
          <div>
            <h6 className="m-0 fw-bolder small">Maharram</h6>
            <span
              className="text-secondary fw-normal"
              style={{ fontSize: "0.75rem" }}>
              +998 (99) 436-46-15
            </span>
          </div>
        </div>

        <p
          className="text-uppercase text-white fw-bold mb-2 ps-2"
          style={{ fontSize: "0.68rem", letterSpacing: "1px" }}>
          Main Menu
        </p>

        <ul className="nav nav-pills flex-column mb-auto gap-1">
          {menuItems.map((item, idx) => {
            const isSelected = activeTab === item.label;
            return (
              <li key={idx}>
                <button
                  onClick={() => setActiveTab(item.label)}
                  className={`nav-link w-100 text-start d-flex align-items-center gap-2 small border-0 px-3 py-2 custom-sidebar-btn ${
                    isSelected
                      ? "active-tab-style fw-bold shadow-sm"
                      : "text-white fw-bold bg-transparent"
                  }`}
                  style={{ outline: "none", boxShadow: "none" }}>
                  <FontAwesomeIcon icon={item.icon} style={{ width: "16px" }} />{" "}
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ========================================== */}
      {/* DYNAMIC MAIN LAYOUT INNER CONTAINER        */}
      {/* ========================================== */}
      <div
        className="flex-grow-1 pe-4 ps-1 py-4 my-3 bg-light"
        style={{ borderRadius: "24px" }}>
        {/* Top Content Header section showing selected tab name */}
        <div className="d-flex justify-content-between align-items-center ps-4 mb-4">
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-sm btn-light border-0">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
            <h5 className="m-0 fw-semibold text-dark">
              Good morning,{" "}
              <span className="fw-bold text-muted">Maharram 👋</span>
              <span
                className="text-primary fs-6 fw-normal ms-3"
                style={{ fontSize: "0.85rem" }}>
                Active view:{" "}
                <strong className="text-capitalize text-decoration-underline">
                  {activeTab}
                </strong>
              </span>
            </h5>
          </div>
          <button className="btn btn-outline-secondary btn-sm border-0 rounded-circle p-2">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        </div>

        {/* ========================================== */}
        {/* RENDER LOGIC BASED ON ACTIVE SELECTION     */}
        {/* ========================================== */}
        {activeTab === "Dashboard" ? (
          <>
            <div className="row g-4 ps-4">
              {/* Main Chart and Stats Column wrapper */}
              <div className="col-lg-8">
                {/* Knowledge Base Top Section Widgets */}
                <h6
                  className="fw-bold mb-3 text-secondary"
                  style={{ fontSize: "0.9rem" }}>
                  Knowledge base
                </h6>
                <KnowledgeBaseCard />

                {/* Simulated Chart Graphic Element Container */}
                <div className="bg-white p-4 rounded-4 shadow-sm border border-light mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="m-0 fw-bold text-dark">Statistic</h6>
                    <div className="d-flex align-items-center gap-2 small text-muted">
                      <FontAwesomeIcon icon={faChevronLeft} /> Aug 2021{" "}
                      <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                  </div>
                  <div className="d-flex gap-3 mb-4 small fw-medium">
                    <span className="text-primary d-flex align-items-center gap-1">
                      ● Average grade
                    </span>
                    <span className="text-success d-flex align-items-center gap-1">
                      ● Exams
                    </span>
                  </div>

                  {/* Fake Graph Area View Holder */}
                  <div
                    className="position-relative border-bottom pb-5 text-center text-muted"
                    style={{ height: "160px" }}>
                    <div className="position-absolute w-100 top-50 start-0 border-top border-light border-2"></div>
                    <span
                      className="position-absolute text-white bg-dark px-2 py-1 rounded small"
                      style={{ left: "62%", top: "35%", fontSize: "0.75rem" }}>
                      3.0
                    </span>
                    <p className="pt-5 fs-6 text-muted opacity-25 fw-light">
                      Line chart canvas plot simulation line
                    </p>
                  </div>
                  <div
                    className="d-flex justify-content-between text-muted mt-2 px-1"
                    style={{ fontSize: "0.75rem" }}>
                    {[
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ].map((m, i) => (
                      <span
                        key={i}
                        className={m === "Aug" ? "fw-bold text-dark" : ""}>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Top Drivers Sidebar List panel item wrapper */}
              <TopDiverslist />
            </div>

            <UserList />
          </>
        ) : (
          /* Placeholder View for all other selected tabs */
          <div className="p-5 text-center text-muted">
            <h4 className="fw-semibold text-dark mb-2">{activeTab} View</h4>
            <p className="small">
              This section is a placeholder screen for the secondary navigation
              menu page content layout.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
