import React from "react";

export const TrumpCard = ({ data }) => {
  const { id, imgSrc, alt, title } = data;
  return (
    <>
      <div key={id} className="shadow trump-card p-2 radius-5">
        <img className="img-responsive" src={imgSrc} alt={alt} />
        <span className="text-center">{title}</span>
      </div>
    </>
  );
};
