import React from "react";
import "./Message.css";

const Message = props => 
  <div className=" jumbotron jumbotron-fluid">
    <div className="container-fluid">
      <div className="infoBox">
        <h1 className="title">{props.children}</h1>
      </div>
    </div>
  </div>
export default Message;
