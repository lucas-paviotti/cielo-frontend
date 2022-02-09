import React from 'react';

export const TitleWithLine = ({title}) => {
  return (
    <div className='title-container'>
      <hr />
      <h2 className='title'>{title}</h2>
    </div>
  );
};
