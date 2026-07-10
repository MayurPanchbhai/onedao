/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSignOutAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import { KnowledgeBaseCard } from "../components/KnowledgeBaseCard";
import { UserList } from "../components/UserList";
import { TopDiverslist } from "../components/TopDiverslist";
import { useData } from "../Context/Datacontext";
import { Stats } from "../components/Stats";

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { menuItems } = useData();
  const Navigate = useNavigate();

  const handleLogout = () => {
    Navigate("/");
  };

  return (
    <div
      className="dashboard-wrapper container-fluid min-vh-100 p-0 d-flex"
      style={{ backgroundColor: "#11141a" }}>
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
            const IconComponent = item.icon;
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
                  <IconComponent size={20} />
                  <span className="fs-7">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex-grow-1 pe-4 ps-1 py-4 my-3 bg-light rounded-4">
        {/* Top Content Header section */}
        <div className="d-flex justify-content-between align-items-center ps-4 mb-4">
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-sm btn-light border-0">
              <FontAwesomeIcon icon={faBars} className="fs-5" />
            </button>
            <h5 className="m-0 fs-4 fw-lighter text-dark">
              Good morning,{" "}
              <span className="fw-medium fs-4 text-dark">Maharram 👋</span>
              {activeTab === "Dashboard" ? (
                <span
                  className="text-dark fs-6  fw-normal ms-3"
                  style={{ fontSize: "0.85rem" }}>
                  you have
                  <span className="text-primary ps-1 "> 1 new message</span>
                </span>
              ) : (
                <span
                  className="text-primary fs-6 fw-normal ms-3"
                  style={{ fontSize: "0.85rem" }}>
                  Active view:{" "}
                  <strong className="text-capitalize text-decoration-underline">
                    {activeTab}
                  </strong>
                </span>
              )}
            </h5>
          </div>
          <button
            onClick={handleLogout}
            className="btn  btn-outline-secondary btn-sm border-0 rounded-circle p-2">
            <FontAwesomeIcon className="fs-4" icon={faSignOutAlt} />
          </button>
        </div>

        {activeTab === "Dashboard" ? (
          <>
            <div className="row g-4 ps-4">
              <div className="col-lg-8">
                <h6
                  className="fw-bold mb-3 text-secondary"
                  style={{ fontSize: "0.9rem" }}>
                  Knowledge base
                </h6>
                <KnowledgeBaseCard />

                <Stats />
              </div>

              {/* Right Top Drivers Sidebar List*/}
              <TopDiverslist />
            </div>

            {/* Bottom Top Drivers Table*/}
            <UserList />
          </>
        ) : (
          <div className="p-5 text-center text-muted">
            <h4 className="fw-semibold text-dark mb-2">{activeTab} View</h4>
          </div>
        )}
      </div>
    </div>
  );
}
