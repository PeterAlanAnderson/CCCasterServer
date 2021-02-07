import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <ul className='footer d-flex justify-content-center'>
        {/* Replace with Patreon icon */}
        <li>
          <a
            href='http://github.com/TomOverland'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-patreon'></i>
          </a>
        </li>
        {/* Replace with Ko-fi icon */}
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
