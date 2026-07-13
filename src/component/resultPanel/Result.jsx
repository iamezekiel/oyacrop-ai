import { useState } from "react";
import resultStyles from "./Result.module.css";

const Result = () => {
  // State to track if the layout adjustments or side-drawer are toggled on tablet
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    /* Combines base styling with conditional tablet layout class if toggled open */
    <div
      className={`${resultStyles.cardContainer} ${
        isMenuOpen ? resultStyles.sidebarOpen : ""
      }`}
    >
      {/* Header Section */}
      <div className={resultStyles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Hamburger Trigger (Visible on tablets via CSS module overrides) */}
          <button
            className={resultStyles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? (
              /* Close Icon (✕) */
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              /* Hamburger Bars Icon (☰) */
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>

          <h2 className={resultStyles.heading}>Analysis Result</h2>
        </div>

        <span className={resultStyles.statusBadge}>
          Complete
          <svg
            className={resultStyles.statusIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </span>
      </div>

      {/* Main Image Banner */}
      <div className={resultStyles.imageWrapper}>
        <img
          src="/public/result-panel.jpeg"
          className={resultStyles.bannerImage}
          alt="Analysis Panel Banner"
        />
      </div>

      {/* Metrics List */}
      <div className={resultStyles.contentBody}>
        {/* Crop Row */}
        <div className={resultStyles.metricRow}>
          <div
            className={`${resultStyles.iconContainer} ${resultStyles.lightGreenBg}`}
          >
            <svg
              className={resultStyles.metricIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 0 9.5C17 17 14 20 11 20z"></path>
              <path d="M19 2c-2.26 4.33-5.27 7.15-8 10"></path>
            </svg>
          </div>
          <div>
            <p className={resultStyles.metricLabel}>Crop</p>
            <p className={resultStyles.metricValue}>
              Cassava (Manihot esculenta)
            </p>
          </div>
        </div>

        {/* Health Status Row */}
        <div className={resultStyles.metricRow}>
          <div
            className={`${resultStyles.iconContainer} ${resultStyles.darkGreenBg}`}
          >
            <svg
              className={resultStyles.metricIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div>
            <p className={resultStyles.metricLabel}>Health Status</p>
            <p
              className={`${resultStyles.metricValue} ${resultStyles.textHealthy}`}
            >
              Healthy
            </p>
          </div>
        </div>

        {/* Disease / Pest Row */}
        <div className={resultStyles.metricRow}>
          <div
            className={`${resultStyles.iconContainer} ${resultStyles.lightGreenBg}`}
          >
            <svg
              className={resultStyles.metricIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M8 2v4M16 2v4M3.5 7h17M6 12h12M5 17h14M12 6v16"></path>
            </svg>
          </div>
          <div className={resultStyles.flexGrow}>
            <p className={resultStyles.metricLabel}>Disease / Pest</p>
            <div className={resultStyles.flexJustifyBetween}>
              <p className={resultStyles.metricValue}>
                No major disease detected
              </p>
              <span className={resultStyles.riskBadge}>Low Risk</span>
            </div>
          </div>
        </div>

        {/* Confidence Score Row */}
        <div className={resultStyles.metricRow}>
          <div
            className={`${resultStyles.iconContainer} ${resultStyles.lightGreenBg}`}
          >
            <svg
              className={resultStyles.metricIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
          </div>
          <div className={resultStyles.flexGrow}>
            <p className={resultStyles.metricLabel}>Confidence Score</p>
            <div className={resultStyles.confidenceWrapper}>
              <p className={resultStyles.metricValue}>94%</p>
              <div className={resultStyles.progressBarContainer}>
                <div
                  className={resultStyles.progressBarFill}
                  style={{ width: "94%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Harvest Estimate Row */}
        <div className={resultStyles.metricRow}>
          <div
            className={`${resultStyles.iconContainer} ${resultStyles.lightGreenBg}`}
          >
            <svg
              className={resultStyles.metricIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div>
            <p className={resultStyles.metricLabel}>Harvest Estimate</p>
            <p className={resultStyles.metricValue}>About 3 – 4 weeks</p>
            <p className={resultStyles.subText}>
              Based on current growth stage
            </p>
          </div>
        </div>

        {/* Recommendation Box */}
        <div className={resultStyles.recommendationBox}>
          <h3 className={resultStyles.recommendationHeading}>Recommendation</h3>
          <ul className={resultStyles.recommendationList}>
            <li>
              <svg
                className={resultStyles.bulletIconDefault}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .6 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                <line x1="9" y1="18" x2="15" y2="18"></line>
                <line x1="10" y1="22" x2="14" y2="22"></line>
              </svg>
              <span>Continue regular watering.</span>
            </li>
            <li>
              <svg
                className={resultStyles.bulletIconCheck}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Apply organic compost or NPK fertilizer.</span>
            </li>
            <li>
              <svg
                className={resultStyles.bulletIconCheck}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Monitor for mosaic disease and whiteflies.</span>
            </li>
            <li>
              <svg
                className={resultStyles.bulletIconCheck}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Ensure good spacing for better tuber growth.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className={resultStyles.footer}>
        <button className={resultStyles.footerButtonWithBorder}>
          <svg
            className={resultStyles.buttonIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Report (PDF)
        </button>
        <button className={resultStyles.footerButton}>
          <svg
            className={resultStyles.buttonIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
          Share Result
        </button>
      </div>
    </div>
  );
};

export default Result;
