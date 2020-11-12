import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import editComponent from '../components/GameEditing.js';

const GameEdit = () => {
  let { id } = useParams();
  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch('http://localhost:8080/' + id);
      const data = await response.json();

      try {
        setGame(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAPI();
  }, []);
  const [game, setGame] = useState([]);
  return (
    <>
    <h1 id="addGameTitle">Editing a Game</h1>
    {editComponent()}
    </>
  )
}

export default GameEdit;