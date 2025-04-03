import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaBars, FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import "./Layout.css";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="dashboard">
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </button>
        <ul>
          <li>
            <FaHome className="icon" /> {isOpen && "Dashboard"}
          </li>
          <li>
            <FaUser className="icon" /> {isOpen && "Profile"}
          </li>
          <li>
            <FaCog className="icon" /> {isOpen && "Settings"}
          </li>
          <li className="logout">
            <FaSignOutAlt className="icon" /> {isOpen && "Logout"}
          </li>
        </ul>
      </div>

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
