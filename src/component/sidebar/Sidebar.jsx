import sidebarStyles from "./sidebar.module.css";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`${sidebarStyles.sidebar} ${
        isOpen ? sidebarStyles.sidebarOpen : ""
      }`}
    >
      <div className={`${sidebarStyles.sideTop}`}>
        <div className={`${sidebarStyles.topLogo}`}>
          <img src="/logo.jpeg" alt="logo-image" />
          <div className={`${sidebarStyles.topLogoInfo}`}>
            <h3>OyaCrop AI</h3>
            <p>Harvest Prediction Assistant</p>
          </div>
        </div>

        <button className={`${sidebarStyles.topAnalysisBtn}`}>
          <i className="fa fa-plus" aria-hidden="true"></i>
          <p>New Analysis</p>
        </button>

        <div className={sidebarStyles.cancel} onClick={() => setIsOpen(false)}>
          {/* <i className="cancel fa-solid fa-square-xmark"></i> */}
          &times;
        </div>
      </div>

      <div className={`${sidebarStyles.sideMenu}`}>
        <Link to="/chat" className={`${sidebarStyles.menuItem}`}>
          <i className="fa fa-comment" aria-hidden="true"></i>
          <span>Chat Assistant</span>
        </Link>

        <Link to="/dashboard" className={`${sidebarStyles.menuItem}`}>
          <i className="fa fa-table" aria-hidden="true"></i>
          <span>Dashboard</span>
        </Link>

        <Link to="/dashboard/history" className={`${sidebarStyles.menuItem}`}>
          <i className="fa fa-history" aria-hidden="true"></i>
          <span>History</span>
        </Link>

        {/* <Link to="/dashboard/setting" className={`${sidebarStyles.menuItem}`}>
          <i className="fa fa-cog" aria-hidden="true"></i>
          <span>Settings</span>
        </Link>

        <Link
          to="/dashboard/notification"
          className={`${sidebarStyles.menuItem}`}
        >
          <i className="fa-regular fa-bell"></i>
          <span>Notifications</span>
        </Link> */}
      </div>

      <div className={`${sidebarStyles.sideCard}`}>
        <img src="/sideBar.jpeg" alt="image-of-a-plant" />
        <h3>AI for better harvest</h3>
        <p>
          Get accurate insights about your crops and make smarter farming
          decisions
        </p>
      </div>

      <div className={`${sidebarStyles.line}`}></div>

      <div className={`${sidebarStyles.sideProfiles}`}>
        <img src="/user.jpg" alt="user-profile" />
        <div className={`${sidebarStyles.sideProfileMain}`}>
          <div className={`${sidebarStyles.userProfileInfo}`}>
            <h3>Andrew Precious</h3>
            <p>Delta state, Nigeria</p>
          </div>

          <div className={`${sidebarStyles.userProfileMore}`}>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
