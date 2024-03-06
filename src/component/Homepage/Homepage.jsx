import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import Game from '../Game/Game';

function Homepage() {
  return (
    <>
      <div className="container">
        <div className="dice-img">
          <img src="/images/dice.png" alt="" />
        </div>
        <div className="dice-content">
          <h1>DICE GAME</h1>
        <button><Link className='link' to="/game">Play Now</Link></button> 
        </div>
      </div>
    </>
  )
}

export default Homepage;
