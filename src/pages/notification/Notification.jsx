import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./notification.module.css";
import BottomNav from "../../component/bottomNav/BottomNav";

const Notification = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notificationPage}>
      {/* Header */}
      <div className={styles.header}>
        <button onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        <div>
          <h2>Notifications</h2>
          <p>Stay updated with your farm</p>
        </div>
      </div>

      {/* Today */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3>Today</h3>
          <span>Mark all as read</span>
        </div>

        <div className={`${styles.card} ${styles.unread}`}>
          <div className={styles.icon}>
            <i className="fa-solid fa-chart-line"></i>
          </div>

          <div className={styles.content}>
            <h4>Harvest Prediction Ready</h4>
            <p>Your Cassava analysis is complete.</p>

            <div className={styles.footer}>
              <span>2 mins ago</span>

              <button>View Result</button>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <i className="fa-solid fa-cloud-rain"></i>
          </div>

          <div className={styles.content}>
            <h4>Weather Alert</h4>
            <p>Heavy rainfall is expected tomorrow.</p>

            <span>45 mins ago</span>
          </div>
        </div>
      </div>

      {/* Yesterday */}

      <div className={styles.section}>
        <h3>Yesterday</h3>

        <div className={styles.card}>
          <div className={styles.icon}>
            <i className="fa-solid fa-seedling"></i>
          </div>

          <div className={styles.content}>
            <h4>Analysis Completed</h4>
            <p>Your Maize field analysis has been completed.</p>

            <span>Yesterday • 6:15 PM</span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <i className="fa-solid fa-triangle-exclamation"></i>
          </div>

          <div className={styles.content}>
            <h4>Disease Warning</h4>
            <p>Possible leaf blight detected in uploaded image.</p>

            <span>Yesterday • 2:05 PM</span>
          </div>
        </div>
      </div>

      {/* Earlier */}

      <div className={styles.section}>
        <h3>Earlier</h3>

        <div className={styles.card}>
          <div className={styles.icon}>
            <i className="fa-solid fa-calendar-check"></i>
          </div>

          <div className={styles.content}>
            <h4>Harvest Reminder</h4>
            <p>Your Yam crop is nearing harvest maturity.</p>

            <span>3 days ago</span>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Notification;
