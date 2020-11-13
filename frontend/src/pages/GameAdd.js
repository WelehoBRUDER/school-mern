import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import addComponent from '../components/GameAdding.js';

const GameAdd = () => {
  return (
    <>
    <h1 id="addGameTitle">Adding a Game</h1>
    {addComponent()}
    </>
  )
}

export default GameAdd;