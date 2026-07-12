import Sidebar from "../../component/sidebar/Sidebar";
import Result from "../../component/resultPanel/Result";
import Header from "../../component/header/Header";
import Chatbox from "../../component/chatbox/Chatbox";
import dashboardStyles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={`${dashboardStyles.dashboard}`}>
      <Sidebar />
      <div className={`${dashboardStyles.mainContent}`}>
        <Header />
        <div className={`${dashboardStyles.content}`}>
          <Chatbox />
          <Result />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
