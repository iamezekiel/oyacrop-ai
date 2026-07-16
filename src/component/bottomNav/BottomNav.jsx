import React from "react";
import bottomNavStyles from "./bottomNav.module.css";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className={`${bottomNavStyles.mobileBottomNav}`}>
      <Link to="/chat" className={`${bottomNavStyles.menuItem}`}>
        <i className="fa fa-comment" aria-hidden="true"></i>
        <span>Chat</span>
      </Link>

      <Link to="/dashboard" className={`${bottomNavStyles.menuItem}`}>
        <i className="fa fa-table" aria-hidden="true"></i>
        <span>Dashboard</span>
      </Link>

      <div className={`${bottomNavStyles.mobileImageUpload}`}>
        <label
          htmlFor="mobileImageUpload"
          className={`${bottomNavStyles.mobileImgBtn}`}
        >
          <i className="fa-solid fa-camera"></i>
        </label>

        <input type="file" id="mobileImageUpload" accept="image/*" hidden />
      </div>

      <Link to="/dashboard/history" className={`${bottomNavStyles.menuItem}`}>
        <i className="fa fa-history" aria-hidden="true"></i>
        <span>History</span>
      </Link>

      <Link to="/user" className={`${bottomNavStyles.menuItem}`}>
        <i className="fa fa-user" aria-hidden="true"></i>
        <span>Profile</span>
      </Link>
    </div>
  );
};

export default BottomNav;
