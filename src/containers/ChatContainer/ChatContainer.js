import React, {useEffect, useState, useContext} from 'react'
import Footer from "../Footer/Footer"
import Chats from "../../components/Chats/Chats"
import "./style.scss"
import { Store } from '../../redux/Store'


export default function ChatContainer (props) {
  const [botFlag, setBotFlag] = useState(false)
  const { state , dispatch } = useContext(Store);
  const onMessage = (userMessage) => {
    let new_message = {data: {userMessage: userMessage, botMessage: "Pardon my ignorance. I am just a dummy."}}
    dispatch({
      type: 'ADD',
      message: state.message.push(new_message)
    })
  }

  return (
    <div className = "">
      <div className = "chat-wrap">{state && state.message.length > 0 && <Chats currentChat = {state.message}/>}</div>
      <Footer addNewChat= {onMessage}/>
    </div>
  )
}
