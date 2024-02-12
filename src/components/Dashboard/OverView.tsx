import React from "react";
import Cards from "./Cards";
import { Images } from "../Config/Images";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

const OverView = (props: any) => {
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  console.log(props.cards, "props");
  const cardBlocks = [
    { icon: Images.antDesign, title: "Total Customers", value: "23,500" },
    {
      icon: Images.BlackIcon,
      title: "Total Application",
      value: "10,500",
    },
    {
      icon: Images.FileIcon,
      title: "Total Approved ",
      value: "425,000,",
    },
    {
      icon: Images.LaFile,
      title: "Total Disbursed ",
      value: "425,000",
    },
    { icon: Images.OrangeIcon, title: "Total Customers", value: "23,500" },
    {
      icon: Images.LaFile,
      title: "Total Application",
      value: "10,500",
    },
    {
      icon: Images.BlackIcon,
      title: "Total Approved ",
      value: "425,000",
    },
    {
      icon: Images.LineIcon,
      title: "Total Disbursed",
      value: "425,000",
    },
  ];
  const GlobalStyle = createGlobalStyle`

  .card-blocks .row .col-md-3 .card{
    background: ${themeBuilder?.cards?.cardsBackgroundColor} !important;
    color:${themeBuilder?.cards?.cardsTextColor}!important;
  }
  `;
  return (
    <>
      <div className="card-blocks">
        <div className="row">
          {props?.cards &&
            props?.cards.map((card: any, index: any) => (
              <Cards
                className=""
                key={index}
                icon={card.icon ? card.icon : Images.Distribute}
                title={card.title}
                value={card.value}
              />
            ))}
        </div>
      </div>
      <GlobalStyle />
    </>
  );
};

export default OverView;
