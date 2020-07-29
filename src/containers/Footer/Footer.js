import React, {useState, useContext} from 'react';
import Input from "../../partials/Input/Input"
import ImageUploader from "../../components/ImageUploader/ImageUploader"
import {arrowIcon} from "../../static/svgs"
import { Store, addChat } from '../../redux/Store'
import "./style.scss"

// business login move from here
export default function Footer(props) {
  const [message, setMessage] = useState("");

  const { state , dispatch } = useContext(Store);
  const onMessage = (userMessage) => {
    let new_message = state.message.slice(0)
    new_message.push({data: {userMessage: userMessage, botMessage: "Pardon my ignorance. I am just a dummy."}})
    addChat({new_message, dispatch})
  }
  function changeInput(e){
    setMessage(e.target.value)
  }

  function addNewChat(){
    let state_message = message;
    if(!message){
      return
    }
    setMessage("")
    onMessage(state_message)
  }

  function handleKeyevant(e){
    let keycode = e.keyCode
    if(keycode == 13){
      addChat()
    }
  }

  function uploadImage(input){
    if(input && input.files && input.files[0]){
      onMessage(input.files)
    }

  }

  return (
    <div className="row footer-container">
      <div className = "row input-container">
        <Input
          type = "text"
          value = {message}
          placeholder = "Type message"
          onChange =  {changeInput}
          onKeyDown = {handleKeyevant}
          id = "add-message"
          classes = {{contClass  : 'container row', fieldClass : 'input'}}
        />
        <ImageUploader uploadImage = {uploadImage}/>
      </div>

      <div className = "send-button-wrap" onClick = {addNewChat}>
        <span className className = "send-button">
          {arrowIcon()}
        </span>
      </div>
    </div>
  )
}
