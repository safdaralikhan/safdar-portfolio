import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid for generating unique IDs

import axios from "axios";
import "./style.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]); // Messages state
  const [input, setInput] = useState(""); // Input field state
  const [sessionId, setSessionId] = useState(""); // State to store session ID

  const toggleChatbot = () => {
    if (!isOpen) {
      // Generate new session ID when opening the chatbot
      const newSessionId = uuidv4();
      setSessionId(newSessionId);
    } else {
      // Clear session ID and messages when closing the chatbot
      setSessionId("");
      setMessages([]);
    }
    setIsOpen(!isOpen);
  };


  const handleSend = async () => {
    if (input.trim()) {
      // Add user's message
      const userMessage = { sender: "user", text: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      try {
        // Send POST request to API
        const response = await axios.post("http://192.168.114.124:8000/chat/", {
          session_id: sessionId,
          query: input ,
        });

        // Add chatbot's response
        const botMessage = { sender: "bot", text: response.data.answer || "No response from bot." };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        // Handle error case
        const errorMessage = { sender: "bot", text: "Currently chatbot is unavailable." };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }

      // Clear input field
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend(); // Call handleSend when Enter is pressed
    }
  };

  return (
    <div className="chatbot-container">
    <div
      className={`chatbot-window ${isOpen ? "open" : "closed"}`}
    >
      <div className="chatbot-header">
        <h5>My Personal Chatbot</h5>
        <button className="close-button" onClick={toggleChatbot}>
          ×
        </button>
      </div>
      <div className="chatbot-body">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${
                message.sender === "user" ? "user-message" : "bot-message"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="send-button">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            version="1.1"
            height="25px"
            width="25px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"></path>
          </svg>
        </button>
      </div>
    </div>
  
    <button className="chatbot-icon" onClick={toggleChatbot}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="25px"
        width="25px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M391.553 64H57.607C53.131 64 48 67.745 48 72.159v214.217c0 4.413 5.131 8.624 9.607 8.624H115v88.894L205.128 295h186.425c4.477 0 7.447-4.211 7.447-8.624V72.159c0-4.414-2.971-8.159-7.447-8.159z"></path>
        <path d="M456.396 127H424v166.57c0 15.987-6.915 26.43-25.152 26.43H218.096l-38.905 39h129.688L399 448v-89h57.396c4.478 0 7.604-4.262 7.604-8.682V136.103c0-4.414-3.126-9.103-7.604-9.103z"></path>
      </svg>
    </button>
  </div>
  
  );
};

export default Chatbot;
