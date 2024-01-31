import React from "react";

const Cards = (props: any) => {
  return (
    <div className="col-md-3">
      <div className="card" style={{ backgroundColor: props.backgroundColor }}>
        <img src={props.icon} alt={props.title} style={{height:"30px" , width:"30px"}} />
        <div className="card-body">
          <div className="card-title" style={{ fontSize: "14px" }}>
            {props.title}
          </div>
          <p className="card-text" style={{ fontSize: "24px" , fontWeight: "600" }}>
            {props.value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
