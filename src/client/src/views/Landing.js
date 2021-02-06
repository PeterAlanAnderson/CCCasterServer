import React from 'react';
import './Landing.scss';
import Button from 'react-bootstrap/Button';

const Landing = () => {
  return (
    <div className='landing-container'>
      <div className='d-flex justify-content-center'>
        <Button className='landing-button mt-4' variant='light'>
          Sign Up
        </Button>
      </div>

      <p className='landing-text d-flex justify-content-center mb-2'>
        Out of the bathroom and onto the main stage.
      </p>
      <p className='landing-text d-flex justify-content-center my-2'>
        We've brought you some long overdue&nbsp;
        <span className='bold'>Matchmaking</span>
      </p>
      <p className='landing-text d-flex justify-content-center my-2'>
        to pair with that buttery smooth&nbsp;
        <span className='bold'>Rollback Netcode</span>
      </p>
      <div className='d-flex justify-content-center'>
        <Button className='landing-button mt-4' variant='light'>
          Get the Game
        </Button>
      </div>

      <p className='landing-text d-flex justify-content-center mb-2'>
        No account needed to play&nbsp;
        <span className='bold'>Regional Matchmaking</span>.
      </p>
      <p className='landing-text d-flex justify-content-center my-2'>
        <span className='bold'>Ranked Mode&nbsp;</span> and so much more coming
        soon.
      </p>
      <div className='d-flex justify-content-center'>
        <Button className='landing-button mt-4' variant='light'>
          Support Us
        </Button>
      </div>

      <p className='landing-text d-flex justify-content-center my-2'>
        Please consider supporting us directly by donating or
      </p>
      <p className='landing-text d-flex justify-content-center my-2'>
        subscribing with Ko-fi or Patreon.
      </p>
    </div>
  );
};

export default Landing;
