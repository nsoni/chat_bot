import React, { useState, useEffect } from 'react'
import '../styles/style.scss'

import {
  Switch,
  Route,
} from "react-router-dom";

import NavBar from "../containers/Navbar/Navbar"
import OfflineBanner from "../containers/Banners/OfflineBanner"
import MainHeader from "../containers/Header/MainHeader.js"
import ChatContainer from "../containers/ChatContainer/ChatContainer"
import JobsContainer from "../containers/JobsContainer/JobsContainer"
import ProfileContainer from "../containers/ProfileContainer/ProfileContainer"
import Footer from "../containers/Footer/Footer"

const Routes = () => {
  const [ net_state , setNetstate ] = useState(window.navigator.onLine);
  
  useEffect(() => {
    window.addEventListener('load', function() {
      function updateOnlineStatus(event) {
        let offline_status = window.navigator.onLine
        setNetstate(offline_status)
      }

      window.addEventListener('online',  updateOnlineStatus);
      window.addEventListener('offline', updateOnlineStatus);
    });
  })

  return(
    <div className={`main-container ${!net_state ? "offline-mode" : ""}`}>
      <Route path = "/" render = {(props) => (
        <div className="column">
          <MainHeader net_state = {net_state}/>
          {!net_state && (<OfflineBanner/>)}
          <NavBar net_state = {net_state} match = {props}/>
        </div>
      )}/>
      
      <div className={`column body-container ${!net_state ? "grey-out" : ""}`}>
        <Switch>
          <Route path="/Chat" component={ChatContainer}/>
          <Route path="/Jobs" component={JobsContainer}/>
          <Route path="/Profile" component={ProfileContainer}/>
        </Switch>
      </div>
     
    </div>
  )};
 //<Route path="/Chat" component={Footer}/>
export default Routes
