import React, { useState } from "react";
import styles from "./login.module.css"; // Importing as a CSS Module

export default function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeForm, setActiveForm] = useState("login");

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className={styles["app-shell"]}>
      {/* ================= AUTH PORTAL ================= */}
      <div
        className={`${styles["auth-container"]} ${isAuthenticated ? styles.authenticated : ""}`}
      >
        <div className={styles["auth-header"]}>
          <div className={styles["logo-icon"]}>
            <i className="fa-solid fa-seedling"></i>
          </div>
          <h1>OyaCrop AI</h1>
          <p>Nigerian Smart Farming Harvest Advisor</p>
        </div>

        <div className={styles["auth-body"]}>
          <div className={styles["form-toggle"]}>
            <button
              className={`${styles["toggle-btn"]} ${activeForm === "login" ? styles.active : ""}`}
              onClick={() => setActiveForm("login")}
            >
              Login
            </button>
            <button
              className={`${styles["toggle-btn"]} ${activeForm === "register" ? styles.active : ""}`}
              onClick={() => setActiveForm("register")}
            >
              Register
            </button>
          </div>

          {/* LOGIN FORM */}
          {activeForm === "login" && (
            <form
              className={`${styles["auth-form"]} ${styles.active}`}
              onSubmit={handleAuthSubmit}
            >
              <div className={styles["input-group"]}>
                <label htmlFor="login-email">Email Address</label>
                <div className={styles["input-wrapper"]}>
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="email"
                    id="login-email"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
              </div>

              <div className={styles["input-group"]}>
                <label htmlFor="login-pass">Password</label>
                <div className={styles["input-wrapper"]}>
                  <i className="fa-solid fa-lock"></i>
                  <input
                    type="password"
                    id="login-pass"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button type="submit" className={styles["submit-btn"]}>
                Sign In to Dashboard
              </button>
            </form>
          )}

          {/* REGISTER FORM */}
          {activeForm === "register" && (
            <form
              className={`${styles["auth-form"]} ${styles.active}`}
              onSubmit={handleAuthSubmit}
            >
              <div className={styles["input-group"]}>
                <label htmlFor="reg-name">Full Name</label>
                <div className={styles["input-wrapper"]}>
                  <i className="fa-solid fa-user"></i>
                  <input
                    type="text"
                    id="reg-name"
                    placeholder="E.g., Ezekiel Adebayo"
                    required
                  />
                </div>
              </div>

              <div className={styles["input-group"]}>
                <label htmlFor="reg-email">Email Address</label>
                <div className={styles["input-wrapper"]}>
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="email"
                    id="reg-email"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
              </div>

              <div className={styles["input-group"]}>
                <label htmlFor="reg-state">Farming State (Nigeria)</label>
                <div className={styles["input-wrapper"]}>
                  <i className="fa-solid fa-location-dot"></i>
                  <select id="reg-state" required defaultValue="">
                    <option value="" disabled>
                      Select State
                    </option>
                    <option value="Oyo">Oyo</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Benue">Benue</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Kaduna">Kaduna</option>
                    <option value="Kano">Kano</option>
                    <option value="Other">Other State</option>
                  </select>
                </div>
              </div>

              <div className={styles["input-group"]}>
                <label htmlFor="reg-pass">Password</label>
                <div className={styles["input-wrapper"]}>
                  <i className="fa-solid fa-lock"></i>
                  <input
                    type="password"
                    id="reg-pass"
                    placeholder="Create secure password"
                    required
                  />
                </div>
              </div>

              <button type="submit" className={styles["submit-btn"]}>
                Create Free Account
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ================= CHATBOT CONTAINER ================= */}
      <div className={styles["chat-container"]}>
        <div className={styles["chat-header"]}>
          <div className={styles["header-left"]}>
            <div className={styles.avatar}>
              <i className="fa-solid fa-leaf"></i>
            </div>
            <div className={styles["header-info"]}>
              <h2>OyaCrop AI</h2>
              <p>Harvest Prediction Assistant</p>
            </div>
          </div>
          <button
            className={styles["logout-btn"]}
            onClick={handleLogout}
            title="Logout"
          >
            <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>

        <div className={styles["chat-window"]}>
          <div className={`${styles.message} ${styles["bot-message"]}`}>
            Welcome back! Please snap or upload a clear picture of your crop
            canopy or root tubers (e.g., Cassava, Yam, Maize) so I can evaluate
            if it is ready for harvest.
            <span className={styles.timestamp}>14:02</span>
          </div>

          <div
            className={`${styles.message} ${styles["user-message"]} ${styles["image-container"]}`}
          >
            <img
              src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=400&q=80"
              alt="Uploaded Cassava Leaves"
              className={styles["uploaded-crop-img"]}
            />
            <span className={styles.timestamp}>14:10</span>
          </div>

          <div className={`${styles.message} ${styles["user-message"]}`}>
            Here is the picture of my Cassava farm in Oyo. Is it due for
            harvest?
            <span className={styles.timestamp}>14:10</span>
          </div>

          <div className={`${styles.message} ${styles["bot-message"]}`}>
            Analysis complete for <strong>Cassava (Manihot esculenta)</strong>.
            <br />
            <br />
            Based on the canopy color density and typical maturity cycles in
            your region:
            <div className={styles["prediction-card"]}>
              <div className={styles["prediction-status"]}>
                <i className="fa-solid fa-hourglass-half"></i> NOT YET DUE (~85%
                Mature)
              </div>
              <p>
                <strong>Estimated Harvest Window:</strong> 3 to 4 weeks from now
                (Early August).
              </p>
              <p style={{ fontSize: "12px", marginTop: "4px", color: "#555" }}>
                <em>
                  Tip: Wait for the lower leaves to yellow and drop naturally
                  before harvesting for optimal starch yield.
                </em>
              </p>
            </div>
            <span className={styles.timestamp}>14:11</span>
          </div>
        </div>

        <div className={styles["chat-input-area"]}>
          <label
            htmlFor="crop-image-input"
            className={styles["image-upload-btn"]}
            title="Upload crop photo"
          >
            <i className="fa-solid fa-camera"></i>
          </label>
          <input
            type="file"
            id="crop-image-input"
            accept="image/*"
            style={{ display: "none" }}
          />
          <input
            type="text"
            className={styles["chat-input"]}
            placeholder="Type a message or ask about your crop..."
          />
          <button className={styles["send-btn"]} title="Send message">
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
