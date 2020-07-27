import React, {useState} from 'react';
import Input from "../../partials/Input/Input"
import ImageUploader from "../../components/ImageUploader/ImageUploader"
import {arrowIcon} from "../../static/svgs"

import "./style.scss"
// business login move from here
export default function Footer(props) {
  const [message, setMessage] = useState("");

  function changeInput(e){
    setMessage(e.target.value)
  }

  function addChat(){
    let state_message = message;
    if(!message){
      return
    }
    setMessage("")
    props.addNewChat(state_message)
  }

  function handleKeyevant(e){
    let keycode = e.keyCode
    if(keycode == 13){
      addChat()
    }
  }

  function uploadImage(input){
    if(input && input.files && input.files[0]){
      props.addNewChat(input.files)
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
      
      <div className = "send-button-wrap" onClick = {addChat}>
        <span className className = "send-button">
          {arrowIcon()}
        </span>
      </div>
    </div>
  )
}
