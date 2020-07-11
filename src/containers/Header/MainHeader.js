import React from 'react';
import {logo} from "../../static/svgs"
import "./style.scss"

export default function MainHeader ({net_state }) {

  return (<header className={`row header-container ${!net_state ? "grey-out" : ""}`}>
    <section className="row logo-wraper">
      {logo()} 
    </section>
    <section className="row"><span className="rupee-logo">₹</span></section>
  </header>)
}
