import React, {useEffect, useState} from 'react'
import Footer from "../Footer/Footer"
import Chats from "../../components/Chats/Chats"
import "./style.scss"
import { Store } from '../../redux/Store'


export default function ChatContainer (props) {
  const [botFlag, setBotFlag] = useState(false)
  const { state , dispatch } = React.useContext(Store);

  const onMessage = (userMessage) => {
    return Promise.resolve({data: {userMessage: userMessage, botMessage: "Pardon my ignorance. I am just a dummy."}}).then((new_message) => {
      dispatch({
        types: 'ADD',
        message: state.message.push(new_message)
      })
      setBotFlag(!botFlag)
    });
  }

  return (
    <div className = "">
      <div className = "chat-wrap">{state && state.message.length > 0 && <Chats currentChat = {state.message}/>}</div>
      <Footer addNewChat= {onMessage}/>
    </div>
  )
}
