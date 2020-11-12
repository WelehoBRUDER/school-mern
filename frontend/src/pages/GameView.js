import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import gameComponent from '../components/Game.js';
import Error from '../components/Error.js';


import '../styling/header.css';
import '../styling/game.css';
import '../styling/error.css';

const GameView = () => {
  const [loaded, setLoaded] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch('http://localhost:8080/' + id);
      const data = await response.json();

      try {
        setGame(data);
        setLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    getAPI();
  }, []);

  const [game, setGame] = useState([]);
  if ((game.length < 1 || !game) && loaded) {
    return (
      <>
        {Error()}
      </>
    )
  }
  return (
    <>
      {loaded ? gameComponent(game) : ""}
    </>
  );
};

export default GameView;