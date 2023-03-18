import React from "react";

const RemarksList = ({ remarks }) => {
  if (!remarks || !remarks.length) return null;

  return (
    <div className="remarks">
      <h3 className="remarks__title">Observaciones</h3>
      <ul className="remarks__list">
        {remarks.map((item) => {
          return (
            <li key={item.id} className="remarks__list-item">
              {item.item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RemarksList;
