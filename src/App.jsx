import Dashboard from "./pages/dashboard/Dashboard";
import History from "./component/history/History";
import Result from "./component/resultPanel/Result";
import Login from "./pages/login/Login";
import Chatbox from "./pages/chatboxPage/ChatboxPage";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Notification from "./pages/notification/Notification";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/result" element={<Result />} />

          <Route path="/auth" element={<Login />} />

          <Route path="/dashboard/history" element={<History />} />
          <Route path="/chat" element={<Chatbox />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/notification" element={<Notification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
