import React from 'react';
import logo from "../../static/images/logo.jpg"
import "./style.scss"

export default function MainHeader ({net_state }) {

  return (<header className={`row header-container ${!net_state ? "grey-out" : ""}`}>
    <section className="row logo-wraper">
      <img className="logo" src={logo}/>
      <div className="text-logo">Job Finder</div>
    </section>
    <section className="row"><span className="rupee-logo">₹</span></section>
  </header>)
}
