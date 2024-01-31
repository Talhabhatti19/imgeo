import React from "react";
import Cards from "./Cards";
import { Images } from "../Config/Images";
import { createGlobalStyle } from "styled-components";
import { theme } from "../Config/Theme";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

const OverView = () => {
  const themeBuilder = useSelector((state: RootState) => state.block.theme);

  const cardBlocks = [
    { icon: Images.antDesign, title: "Total Customers", value: "23,500" },
    {
      icon: Images.BlackIcon,
      title: "Total Application",
      value: "10,500",
    },
    {
      icon: Images.FileIcon,
      title: "Total Approved Applications",
      value: "425,000,000",
    },
    {
      icon: Images.LaFile,
      title: "Total Disbursed Amount",
      value: "425,000,000",
    },
    { icon: Images.OrangeIcon, title: "Total Customers", value: "23,500" },
    {
      icon: Images.LaFile,
      title: "Total Application",
      value: "10,500",
    },
    {
      icon: Images.BlackIcon,
      title: "Total Approved Applications",
      value: "425,000,000",
    },
    {
      icon: Images.LineIcon,
      title: "Total Disbursed Amount",
      value: "425,000,000",
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
          {cardBlocks.map((card, index) => (
            <Cards
              className="cards-color"
              key={index}
              icon={card.icon}
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
