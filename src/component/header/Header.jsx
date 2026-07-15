import React from "react";
import headerStyles from "./header.module.css";

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`${headerStyles.headerContainer}`}>
      {/* small screen only header starts */}
      <div className={`${headerStyles.mobileHeader}`}>
        {/* hambuger div  */}
        <div
          className={headerStyles.hambuger}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`${headerStyles.topLogo}`}>
          <img src="/logo.jpeg" alt="logo-image" />
          <div className={`${headerStyles.topLogoInfo}`}>
            <h3>OyaCrop AI</h3>
            <p>Harvest Prediction Assistant</p>
          </div>
        </div>

        {/* Mobilenotification */}
        <div className={`${headerStyles.mobileNotification}`}>
          <i className="fa-regular fa-bell"></i>
          <span>3</span>
        </div>
      </div>

      {/* heeader for website starts */}
      <header className={`${headerStyles.header}`}>
        {/* hambuger div  */}
        <div
          className={headerStyles.tabletHambuger}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`${headerStyles.navLeft}`}>
          <h3>Good afternoon, Precious!👋</h3>
          <p>How can i help with your farm today?</p>
        </div>

        <div className={`${headerStyles.navRight}`}>
          <div className={`${headerStyles.location}`}>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <span>Delta State, Nigeria</span>
          </div>

          <div className={`${headerStyles.weather}`}>
            <i className="fa-solid fa-cloud-moon-rain"></i>
            <span>29°C</span>
          </div>

          <div className={`${headerStyles.notification}`}>
            <i className="fa-regular fa-bell"></i>
            <span>3</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
