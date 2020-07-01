import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera} from '@fortawesome/free-solid-svg-icons';
import "./style.scss"

export default function ImageUploader(props){
    function getImage(e){
        props.uploadImage(e.target)
    }
    return (
        <div className = "cammera-icon">
            <label htmlFor = "imageUploader" >
                <span > <FontAwesomeIcon icon = {faCamera}/> </span>
                <input
                    className = "hidden"
                    id= "imageUploader" 
                    name = "imageUploader" 
                    onChange = {getImage} 
                    type="file" 
                    accept=".png, .jpg, .jpeg;capture=camera"
                />
            </label>
            
        </div>
    )
}