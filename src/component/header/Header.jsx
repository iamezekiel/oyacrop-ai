import React from "react";
import headerStyles from "./header.module.css";

const Header = () => {
  return (
    <header className={`${headerStyles.header}`}>
      <div className={`${headerStyles.navLeft}`}>
        <h3>Good afternoon, Precious!👋</h3>
        <p>How can i help with your farm today?</p>
      </div>

      <div className={`${headerStyles.navRight}`}>
        <div className={`${headerStyles.location}`}>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span>Delta State, Nigeria</span>
        </div>

        <div className={`${headerStyles.weather}`}>
          <i class="fa-solid fa-cloud-moon-rain"></i>
          <span>29°C</span>
        </div>

        <div className={`${headerStyles.notification}`}>
          <i class="fa-regular fa-bell"></i>
          <span>3</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
