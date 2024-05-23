import React from "react";
interface LoaderProps {
  processedImagesCount: number;
  totalImages: number;
}

const Loader: React.FC<LoaderProps> = ({
  processedImagesCount,
  totalImages,
}) => {
  const loader = [
    {
      loader: "I",
    },
    {
      loader: "M",
    },
    {
      loader: "G",
    },
    {
      loader: "E",
    },
    {
      loader: "O",
    },
  ];
  return (
    <div className="loader">
      <div className="loader-container col-md-12 col-10">
        <div>
          Processed {processedImagesCount} of {totalImages} images
        </div>
        {loader.map((item: any) => (
          <div className="wave">{item.loader}</div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
