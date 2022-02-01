import React from 'react';
import { ButtonLink } from './ButtonLink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


export const ButtonGroupSocial = ({link, facebook, instagram, envelope}) => {
  return (
      <div className="button-group-social">
            {link && <ButtonLink link={link} target="_blank" text="Contactanos"/>}
            {facebook && <a href={facebook} target="_blank" className='btn-primary_social facebook'><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>}
            {instagram && <a href={instagram} target="_blank" className='btn-primary_social instagram'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>}
            {envelope && <a href={envelope} target="_blank" className='btn-primary_social envelope'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>}
      </div>
  );
};
