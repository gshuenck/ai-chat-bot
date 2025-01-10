import React from 'react'
import "./ChatBotApp.css"

export const ChatBotApp = ({onGoBack}) => {
  return (
  <div className='chat-app'>
    <div className="chat-list">
      <div className="chat-list-header">
        <h2>Chat List</h2>
        <i className="bx bx-edit-alt new-chat"></i>
      </div>
      <div className="chat-list-item active">
        <h4>Chat 10/01/2025 14:50 PM</h4>
        <i className="bx bx-x-circle"></i>
      </div>
      <div className="chat-list-item">
        <h4>Chat 10/01/2025 14:50 PM</h4>
        <i className="bx bx-x-circle"></i>
      </div>
      <div className="chat-list-item">
        <h4>Chat 10/01/2025 14:50 PM</h4>
        <i className="bx bx-x-circle"></i>
      </div>
    </div>
    <div className="chat-window">
      <div className="chat-title">
        <h3>Chat with AI</h3>
        <i className="bx-bx-arrow-back arrow" onClick={onGoBack}></i>
      </div>
      <div className="chat">
        <div className="prompt">Hi, how are you?
          <span>12:59 PM</span>
        </div>
        <div className="response">Hello! I'm just a computer program, so I don't
          <span>12:59 PM</span>
        </div>
        <div className="typing">Typing...</div>
      </div>
      <form className="msg-form">
        <i className="fa-solid fa-face-smile emoji"></i>
        <input type="text" className="msg-input" placeholder='Type a message...' />
        <i className="fa-solid fa-paper-plane"></i>
      </form>
    </div>
  </div>
  )
}

export default ChatBotApp
