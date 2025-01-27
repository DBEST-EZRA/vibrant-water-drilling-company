import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsChatDotsFill, BsSendFill } from "react-icons/bs"; // Importing icons from react-icons

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // State to track if the chat is open
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [inputText, setInputText] = useState(""); // State to store the input text

  const handleSend = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, inputText]);
      setInputText(""); // Clear the input field
    }
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="btn btn-primary rounded-circle"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          width: "60px",
          height: "60px",
        }}
      >
        <BsChatDotsFill size={24} />
      </button>

      {/* Chat Modal */}
      {isChatOpen && (
        <div
          className="card shadow"
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "300px",
            height: "400px",
            zIndex: 1000,
          }}
        >
          {/* Modal Header */}
          <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Chat with Us</h5>
            <button
              onClick={() => setIsChatOpen(false)}
              className="btn btn-sm btn-light"
            >
              ✖
            </button>
          </div>

          {/* Chat Content */}
          <div
            className="card-body overflow-auto"
            style={{ flex: "1", display: "flex", flexDirection: "column" }}
          >
            <p className="text-muted">Welcome! How can we assist you?</p>
            {messages.map((message, index) => (
              <div
                key={index}
                className="bg-light p-2 rounded mb-2 align-self-end text-dark"
                style={{ maxWidth: "80%" }}
              >
                {message}
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="card-footer d-flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="form-control me-2"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="btn btn-primary" onClick={handleSend}>
              <BsSendFill size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
