import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import addComponent from '../components/GameAdding.js';


import '../styling/header.css';
import '../styling/addgame.css';

const GameAdd = () => {
  return (
    <>
    <h1 id="addGameTitle">Adding a Game</h1>
    {addComponent()}
    </>
  )
}

export default GameAdd;