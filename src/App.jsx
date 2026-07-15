import Dashboard from "./pages/dashboard/Dashboard";
import History from "./component/history/History";
import Result from "./component/resultPanel/Result";
import Chatbox from "./pages/chatboxPage/ChatboxPage";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/result" element={<Result />} />
          <Route path="/history" element={<History />} />
          <Route path="/chat" element={<Chatbox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
