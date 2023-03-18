import React from "react";

const SpecList = ({ specs }) => {
  if (!specs || !specs.length) return null;

  return (
    <div className="specs">
      <h3 className="specs__title">Características</h3>
      <ul className="specs__list">
        {specs.map((item) => {
          return (
            <li key={item.id} className="specs__list-item">
              <span className="specs__list-label">{item.label}</span>
              <span className="specs__list-value">{item.value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SpecList;
