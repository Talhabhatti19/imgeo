import React from "react";
import Cards from "./Cards";
import { Images } from "../Config/Images";

const OverView = () => {
  const cardBlocks = [
    { icon: Images.Person, title: "Total Customers", value: "23,500" },
    {
      icon: Images.Doc,
      title: "Total Application",
      value: "10,500",
    },
    {
      icon: Images.Cash,
      title: "Total Approved Applications",
      value: "425,000,000",
    },
    {
      icon: Images.Distribute,
      title: "Total Disbursed Amount",
      value: "425,000,000",
    },
    { icon: Images.Person, title: "Total Customers", value: "23,500" },
    {
      icon: Images.Doc,
      title: "Total Application",
      value: "10,500",
    },
    {
      icon: Images.Cash,
      title: "Total Approved Applications",
      value: "425,000,000",
    },
    {
      icon: Images.Distribute,
      title: "Total Disbursed Amount",
      value: "425,000,000",
    },
  ];

  return (
    <div className="card-blocks">
      <div className="">
        <div className="row">
          {cardBlocks.map((card, index) => (
            <Cards
              key={index}
              icon={card.icon}
              title={card.title}
              value={card.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverView;
