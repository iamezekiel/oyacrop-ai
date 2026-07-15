import Header from "../../component/header/Header";
import Chatbox from "../../component/chatbox/Chatbox";
import chatPageStyles from "./chatboxPage.module.css";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();

  return (
    <div className={chatPageStyles.chatPage}>
      <div className={chatPageStyles.header}>
        <button onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        <h2>Chat Assistant</h2>
      </div>

      <Chatbox />
    </div>
  );
};

export default Chat;
