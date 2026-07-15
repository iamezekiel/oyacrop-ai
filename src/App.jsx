import Dashboard from "./pages/dashboard/Dashboard";
import History from "./component/history/History";
import Result from "./component/resultPanel/Result";
<<<<<<< HEAD
import Login from "./pages/login/Login";
=======
import Chatbox from "./pages/chatboxPage/ChatboxPage";
>>>>>>> 72a3c3d21b772da3fcfbb9933c6f9e7f24c770b5
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/result" element={<Result />} />
<<<<<<< HEAD
          <Route path="/login" element={<Login />} />
=======
          <Route path="/history" element={<History />} />
          <Route path="/chat" element={<Chatbox />} />
>>>>>>> 72a3c3d21b772da3fcfbb9933c6f9e7f24c770b5
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
