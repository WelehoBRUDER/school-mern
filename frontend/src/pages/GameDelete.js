import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const GameDelete = () => {
  let { id } = useParams();
  console.log(id)
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
  console.log(game);
  return (
    <div className="game">
      <h1 className="gameTitle">YOU ARE DELETING {game.name ? game.name.toUpperCase() : ""}, ARE YOU SURE?</h1>
      <form method="POST" action={"http://localhost:8080/delete"} id="del">
        <input type="text" defaultValue={game._id} name="gameId"></input>
        <button className="gameEditSubmit" type="submit">Delete</button>
      </form>
    </div>
  )
}

export default GameDelete;