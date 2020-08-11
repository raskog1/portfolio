import React from "react";
import "./style.css";

function CodingLink(props) {
  return (
    <li>
      <h5>{props.name}</h5>
      <a href={props.website} target="_blank" className="text-info">
        <div className="orangeHover">{props.www}</div>
      </a>
    </li>
  );
}

export default CodingLink;
