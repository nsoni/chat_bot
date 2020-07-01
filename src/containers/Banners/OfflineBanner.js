import React from "react";
import "./style.scss"

export default function OfflineBanner(props){
  return (
    <div className="row banner-container">
      <span className="offline-message">No internet ☹️  </span>
      <button className="retry-button">RETRY</button>
    </div>
  );
}
