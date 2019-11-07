import React from "react";

function Card(props) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            {props.title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
