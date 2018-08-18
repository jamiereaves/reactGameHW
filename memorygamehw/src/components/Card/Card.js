import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <span onClick={() => props.clickHandler(props.id)}>  
        <img className="card-img-top" alt={props.name} src={props.image} />
    </span>
  </div>
);

export default Card;
