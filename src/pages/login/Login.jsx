import React, { useState } from "react";
import styles from "./login.module.css";

export default function Login() {
  const [activeForm, setActiveForm] = useState("login");

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    // Backend will handle authentication later
  };

  return (
    <div className={styles["app-shell"]}>
      {/* LEFT SIDE */}
      <div className={styles.leftSide}>
        <img src="/hero.png" alt="Farm" />
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.rightSide}>
        <div className={styles["auth-container"]}>
          <div className={styles["auth-header"]}>
            <div className={styles["logo-icon"]}>
              <i className="fa-solid fa-seedling"></i>
            </div>

            <h1>OyaCrop AI</h1>

            <p>Smart Harvest Prediction Platform</p>
          </div>

          <div className={styles["auth-body"]}>
            <div className={styles["form-toggle"]}>
              <button
                className={`${styles["toggle-btn"]} ${
                  activeForm === "login" ? styles.active : ""
                }`}
                onClick={() => setActiveForm("login")}
              >
                Login
              </button>

              <button
                className={`${styles["toggle-btn"]} ${
                  activeForm === "register" ? styles.active : ""
                }`}
                onClick={() => setActiveForm("register")}
              >
                Register
              </button>
            </div>

            {/* LOGIN */}

            {activeForm === "login" && (
              <form
                className={`${styles["auth-form"]} ${styles.active}`}
                onSubmit={handleAuthSubmit}
              >
                <div className={styles["input-group"]}>
                  <label>Email Address</label>

                  <div className={styles["input-wrapper"]}>
                    <i className="fa-solid fa-envelope"></i>

                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>
                </div>

                <div className={styles["input-group"]}>
                  <label>Password</label>

                  <div className={styles["input-wrapper"]}>
                    <i className="fa-solid fa-lock"></i>

                    <input type="password" placeholder="••••••••" required />
                  </div>
                </div>

                <button type="submit" className={styles["submit-btn"]}>
                  Sign In
                </button>
              </form>
            )}

            {/* REGISTER */}

            {activeForm === "register" && (
              <form
                className={`${styles["auth-form"]} ${styles.active}`}
                onSubmit={handleAuthSubmit}
              >
                <div className={styles["input-group"]}>
                  <label>Full Name</label>

                  <div className={styles["input-wrapper"]}>
                    <i className="fa-solid fa-user"></i>

                    <input type="text" placeholder="John Doe" required />
                  </div>
                </div>

                <div className={styles["input-group"]}>
                  <label>Email Address</label>

                  <div className={styles["input-wrapper"]}>
                    <i className="fa-solid fa-envelope"></i>

                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>
                </div>

                <div className={styles["input-group"]}>
                  <label>State</label>

                  <div className={styles["input-wrapper"]}>
                    <i className="fa-solid fa-location-dot"></i>

                    <select defaultValue="">
                      <option value="" disabled>
                        Select State
                      </option>

                      <option>Oyo</option>
                      <option>Ogun</option>
                      <option>Kaduna</option>
                      <option>Kano</option>
                      <option>Rivers</option>
                      <option>Benue</option>
                    </select>
                  </div>
                </div>

                <div className={styles["input-group"]}>
                  <label>Password</label>

                  <div className={styles["input-wrapper"]}>
                    <i className="fa-solid fa-lock"></i>

                    <input
                      type="password"
                      placeholder="Create Password"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className={styles["submit-btn"]}>
                  Create Account
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
