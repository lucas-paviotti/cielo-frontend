import React from 'react';

export const TextLink = ({link, target, children}) => {
  return (
    <a href={link} target={target} className='text-link'>
      {children}
    </a>
  );
};
