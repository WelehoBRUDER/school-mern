import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import gameComponent from '../components/Game.js';
import Error from '../components/Error.js';

const GameView = () => {
  const [loaded, setLoaded] = useState(false);
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch('http://localhost:8080/' + id);
      const data = await response.json();

      try {
        setGame(data);
        if(data) setLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    getAPI();
  }, []);

  const [game, setGame] = useState([]);
  // if ((game.length < 1 || !game) && loaded) {
  //   return (
  //     <>
  //       {Error()}
  //     </>
  //   )
  // }
  return (
    <>
      {gameComponent(game)}
    </>
  );
};

export default GameView;