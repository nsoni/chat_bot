import React, {useEffect, useState, useContext} from 'react'
import Chats from "../../components/Chats/Chats"
import "./style.scss"
import { Store, addChat } from '../../redux/Store'

export default function ChatContainer (props) {
  const [botFlag, setBotFlag] = useState(false)
  const { state , dispatch } = useContext(Store);
  useEffect(() => {
    const element = document.querySelector(".chat-wrap");
    let scroll_length = element.scrollHeight;
    element.scrollTop = scroll_length;
  })
  
  return (
    <div className = "chat-wrap">{state && state.message.length > 0 && <Chats currentChat = {state.message}/>}</div>
  )
}
