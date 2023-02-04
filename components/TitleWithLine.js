import React from "react";

export const TitleWithLine = ({ title, center }) => {
  return (
    <div className="title-container">
      <h2 className={`${center ? "title center" : "title"}`}>{title}</h2>
    </div>
  );
};
