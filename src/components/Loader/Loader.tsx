import React from "react";

const Loader = () => {
  const loader = [
    {
      loader: "M",
    },
    {
      loader: "Y",
    },
    {
      loader: "T",
    },
    {
      loader: "M",
    },
    {
      loader: "",
    },
    {
      loader: "C",
    },
    {
      loader: "O",
    },
    {
      loader: "R",
    },
    {
      loader: "E",
    },
  ];
  return (
    <div className="loader">
      <div className="loader-container col-md-12 col-10">
        {loader.map((item: any) => (
          <div className="wave">{item.loader}</div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
