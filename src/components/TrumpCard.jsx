import React from "react";

export const TrumpCard = ({ data }) => {
  const { imgSrc, alt, title } = data;
  return (
    <div>
      <div className="shadow trump-card p-2 radius-5">
        <img className="img-responsive" src={imgSrc} alt={alt} />
        <span className="text-center">{title}</span>
      </div>
    </div>
  );
};
