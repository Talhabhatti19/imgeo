import React from "react";

const Loader = () => {
  const loader = [
    {
      loader: "T",
    },
    {
      loader: "A",
    },
    {
      loader: "N",
    },
    {
      loader: "M",
    },
    {
      loader: "E",
    },
    {
      loader: "Y",
    },
    {
      loader: "A",
    },
    {
      loader: "",
    },
    {
      loader: "F",
    },
    {
      loader: "I",
    },
    {
      loader: "N",
    },
    {
      loader: "A",
    },
    {
      loader: "N",
    },
    {
      loader: "C",
    },
    {
      loader: "E",
    },
  ];
  return (
    <div className="loader">
      <div className="loader-container">
        {loader.map((item: any) => (
          <div className="wave">{item.loader}</div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
