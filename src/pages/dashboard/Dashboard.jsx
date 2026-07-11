import Sidebar from "../../component/sidebar/Sidebar";
import Result from "../../component/resultPanel/Result";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <Sidebar />
      <Result />
    </div>
  );
};

export default Dashboard;
