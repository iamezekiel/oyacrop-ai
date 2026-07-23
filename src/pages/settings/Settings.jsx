import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./settings.module.css";
import BottomNav from "../../component/bottomNav/BottomNav";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.settingsPage}>
      <div className={styles.header}>
        <button onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        <div>
          <h2>Settings</h2>
          <p>Manage your account</p>
        </div>
      </div>

      <div className={styles.card}>
        <h3>
          <i className="fa-solid fa-user"></i>
          Profile
        </h3>

        <div className={styles.info}>
          <span>Name</span>
          <strong>Precious Andrew</strong>
        </div>

        <div className={styles.info}>
          <span>Email</span>
          <strong>precious@gmail.com</strong>
        </div>

        <div className={styles.info}>
          <span>State</span>
          <strong>Delta State</strong>
        </div>

        <button>Edit Profile</button>
      </div>

      <div className={styles.card}>
        <h3>
          <i className="fa-solid fa-bell"></i>
          Notifications
        </h3>

        <div className={styles.setting}>
          <span>Harvest Alerts</span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className={styles.setting}>
          <span>Weather Updates</span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className={styles.setting}>
          <span>Disease Alerts</span>
          <input type="checkbox" />
        </div>
      </div>

      <div className={styles.card}>
        <h3>
          <i className="fa-solid fa-lock"></i>
          Security
        </h3>

        <button>Change Password</button>
      </div>

      <div className={styles.card}>
        <h3>
          <i className="fa-solid fa-circle-info"></i>
          About
        </h3>

        <p>OyaCrop AI Version 1.0.0</p>
      </div>

      <button className={styles.logout}>
        <i className="fa-solid fa-right-from-bracket"></i>
        Logout
      </button>

      <BottomNav />
    </div>
  );
};

export default Settings;
