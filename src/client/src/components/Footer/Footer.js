import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <ul className='footer d-flex justify-content-center'>
        {/* Update link with Patreon Account */}
        <li>
          <a href='#' target='_blank' rel='noreferrer'>
            <i className='fab fa-patreon'></i>
          </a>
        </li>
        {/* Update link with Ko-Fi Account, use Ko-fi logo */}
        <li>
          <a href='#' target='_blank' rel='noreferrer'>
            <i className='fa fa-coffee'></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
