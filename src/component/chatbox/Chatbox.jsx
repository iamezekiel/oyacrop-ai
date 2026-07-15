import React from "react";
import chatboxStyles from "./chatbox.module.css";
import { Link } from "react-router-dom";
import BottomNav from "../bottomNav/BottomNav";

const Chatbox = () => {
  return (
    <div className={`${chatboxStyles.chatbox}`}>
      <div className={`${chatboxStyles.welcomeMessage}`}>
        <img src="/logo.jpeg" alt="ai-logo" />
        <div className={`${chatboxStyles.messageCard}`}>
          <h3>Welcome to OyaCrop AI 🌱</h3>
          <p>
            Please snap or upload a clear picture of your crop canopy or root
            tubers (e.g., Cassava, Yam, Maize) so I can evaluate if it is ready
            for harvest.
          </p>

          <div className={`${chatboxStyles.messageTime}`}>
            <span>14:02</span>
          </div>
        </div>
      </div>

      <div className={`${chatboxStyles.uploadImage}`}>
        <img src="/result-panel.jpeg" alt="uploaded-image" />
        <div className={`${chatboxStyles.fileInfo}`}>
          <h4>Uploaded Cassava Leaves</h4>
          <p>image.jpg • 2.4 MB</p>
        </div>
        <div className={`${chatboxStyles.messageStatus}`}>
          <span>14:02</span>
          <i className="fa-solid fa-check-double"></i>
        </div>
      </div>

      <div className={`${chatboxStyles.userMessage}`}>
        <p>
          Here is the picture of my Cassava farm in Oyo.
          <br />
          Is it due for harvest?
        </p>
        <div className={`${chatboxStyles.messageStatus}`}>
          <span>14:02</span>
          <i className="fa-solid fa-check-double"></i>
        </div>
      </div>

      <div className={`${chatboxStyles.aiLoading}`}>
        <img src="/logo.jpeg" alt="ai-logo" />
        <div className={`${chatboxStyles.loadingCard}`}>
          <h4>Analyzing your image...</h4>
          <p>This usually takes 10-20 seconds</p>
          <div className={`${chatboxStyles.dots}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`${chatboxStyles.messageTime}`}>
            <span>14:02</span>
          </div>
        </div>
      </div>

      <div className={`${chatboxStyles.aiResult}`}>
        <img src="/logo.jpeg" alt="ai-logo" />
        <div className={`${chatboxStyles.resultCard}`}>
          <p>Analysis complete for</p>
          <div className={`${chatboxStyles.statusBadge}`}>
            <h4>Cassava (Manihot esculenta)</h4>
            <svg
              className={chatboxStyles.statusIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <p>Here is what I found</p>

          <Link to="/result" className={`${chatboxStyles.viewResult}`}>
            {/* <i className="fa fa-table" aria-hidden="true"></i> */}
            <span> View Result</span>
          </Link>

          <div className={`${chatboxStyles.messageTime}`}>
            <span>14:02</span>
          </div>
        </div>
      </div>

      <div className={`${chatboxStyles.line}`}></div>

      <div className={`${chatboxStyles.chatInput}`}>
        <div className={`${chatboxStyles.imageUpload}`}>
          <label htmlFor="imageUpload" className={`${chatboxStyles.imgBtn}`}>
            <i className="fa-regular fa-image"></i>
          </label>

          <input type="file" id="imageUpload" accept="image/" hidden />
        </div>

        <input
          type="text"
          placeholder="Type a message or ask about your crop.."
        />

        <button className={`${chatboxStyles.chatInputSend}`}>
          <i class="fa fa-paper-plane" aria-hidden="true"></i>
        </button>
      </div>

      {/* small screen bottom navbar */}
      <BottomNav />
    </div>
  );
};

export default Chatbox;
