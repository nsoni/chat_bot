import React from 'react'
import "./style.scss"

export default function Chats(props){
  let {currentChat} = props
  return (

    <div className = "chat-main">
      {currentChat.map((msg, index) => {
        return (
        <div key = {index} className = "">

          {typeof(msg.data.userMessage) == "object" 
            ? 
              <div className = "message-wraper right-message">
                <img src={URL.createObjectURL(msg.data.userMessage[0])} />
              </div>
              :
              <div className = "message-wraper right-message">
                <span className = "user-message text-message">{msg.data.userMessage} </span>
              </div>
          }

          <div className = "message-wraper left-message">
            <span className = "bot-message text-message">{msg.data.botMessage}</span>
          </div>
        </div>   
      )
      })
      }
    </div>)
}
