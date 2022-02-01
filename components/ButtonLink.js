import React from 'react';

export const ButtonLink = ({link, target, text}) => {
  return (
    <a href={link} target={target} className='btn-primary'>{text}</a>
  );
};
