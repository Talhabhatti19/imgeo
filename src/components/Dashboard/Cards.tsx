import React from "react";

const Cards = (props: any) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={props.icon} alt={props.title} />
        <div className="card-body">
          <div className="card-title" style={{ fontSize: "12px" }}>
            {props.title}
          </div>
          <p className="card-text" style={{ fontSize: "12px" }}>
            {props.value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
