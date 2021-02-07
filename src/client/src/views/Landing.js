import React from 'react';
import './Landing.scss';
import Button from 'react-bootstrap/Button';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="d-flex justify-content-left">
        <Button className="landing-button" variant="light">
          SIGN UP
        </Button>
      </div>

      <p className="landing-text">
        Out of the bathroom and onto the main stage.<br></br>
        We've brought you some long overdue
        <span className="bold"> Matchmaking </span>
        to pair with that buttery smooth
        <span className="bold"> Rollback Netcode</span>
      </p>
      <div className="d-flex">
        <Button className="landing-button" variant="light">
          <a href="https://play.meltyblood.club">GET THE GAME</a>
        </Button>
      </div>

      <p className="landing-text">
        No account needed to play
        <span className="bold"> Regional Matchmaking</span>.<br></br>
        <span className="bold">Ranked Mode </span>
        and so much more coming soon.
      </p>
      <div className="d-flex">
        <Button className="landing-button" variant="light">
          SUPPORT
        </Button>
      </div>

      <p className="landing-text">
        Please consider supporting us directly by donating or subscribing with
        <span className="bold"> Ko-fi </span>
        or
        <span className="bold"> Patreon</span>.
      </p>
    </div>
  );
};

export default Landing;
