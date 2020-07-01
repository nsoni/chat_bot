import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCommentAlt, faBriefcase, faUserCircle, faCamera} from '@fortawesome/free-solid-svg-icons';
import "./style.scss"

export default function NavBar({match, net_state}) {
  let path = match.location.pathname.substr(1);

  return (
    <nav className={`row tab-container ${!net_state ? "grey-out" : ""}`}>
      <Link to = "/Chat" className = {`tabs-wraper ${path == "Chat" && "active"}`}>
        <div className = "tabs ">
          <span className = "tab-icon">
            <FontAwesomeIcon icon={faCommentAlt}/>
          </span>
          <span className = "tab-text">CHAT</span>
        </div>
      </Link>
      <Link to = "/Jobs" className = {`tabs-wraper ${path == "Jobs" && "active"}`}>
        <div className = "tabs">
          <span className = "tab-icon">
            <FontAwesomeIcon icon={faBriefcase}/>
          </span>
          <span className = "tab-text">MY JOBS</span>
        </div>
      </Link>
      <Link to = "/Profile" className = {`tabs-wraper ${path == "Profile" && "active"}`}>
        <div className = "tabs">
          <span className = "tab-icon">
            <FontAwesomeIcon icon={faUserCircle}/>
          </span>
          <span className = "tab-text">PROFILE</span>
        </div>
      </Link>
    </nav>)
}
