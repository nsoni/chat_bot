import React, {useEffect, useState, useContext} from 'react'
import Footer from "../Footer/Footer"
import Chats from "../../components/Chats/Chats"
import "./style.scss"
import { Store, addChat } from '../../redux/Store'


export default function ChatContainer (props) {
  const [botFlag, setBotFlag] = useState(false)
  const { state , dispatch } = useContext(Store);
  const onMessage = (userMessage) => {
    let new_message = state.message.slice(0)
    new_message.push({data: {userMessage: userMessage, botMessage: "Pardon my ignorance. I am just a dummy."}})
    addChat({new_message, dispatch})
  }

  return (
    <>
      <div className = "chat-wrap">{state && state.message.length > 0 && <Chats currentChat = {state.message}/>}</div>
      <Footer addNewChat= {onMessage}/>
    </>
  )
}
