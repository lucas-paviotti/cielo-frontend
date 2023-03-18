import React from "react";

const AvionicList = ({ avionics }) => {
  if (!avionics || !avionics.length) return null;

  return (
    <div className="avionics">
      <h3 className="avionics__title">Aviónica</h3>
      <ul className="avionics__list">
        {avionics.map((item) => {
          return (
            <li key={item.id} className="avionics__list-item">
              {item.item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AvionicList;
