import Sidebar from "../../component/sidebar/Sidebar";
import Result from "../../component/resultPanel/Result";
import Header from "../../component/header/Header";
import Chatbox from "../../component/chatbox/Chatbox";
import dashboardStyles from "./dashboard.module.css";
import { useState } from "react";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${dashboardStyles.dashboard}`}>
      <Sidebar isOpen={isOpen} />
      <div className={`${dashboardStyles.mainContent}`}>
        <Header setIsOpen={setIsOpen} isOpen={isOpen} />
        <div className={`${dashboardStyles.content}`}>
          <Chatbox />
          <Result />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
