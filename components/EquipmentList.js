import React from "react";

const EquipmentList = ({ equipment }) => {
  if (!equipment || !equipment.length) return null;

  return (
    <div className="equipment">
      <h3 className="equipment__title">Equipamiento</h3>
      <ul className="equipment__list">
        {equipment.map((item) => {
          return (
            <li key={item.id} className="equipment__list-item">
              {item.item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EquipmentList;
