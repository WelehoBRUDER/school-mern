import React, { Fragment, useEffect, useState } from 'react';

import gameComponent from './components/Game.js';

import './styling/game.css';

const App = () => {
  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch('http://localhost:8080/');
      const data = await response.json();

      try {
        console.log(data);
        setGame(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAPI();
  }, []);

  const [game, setGame] = useState([]);

  return (
    <Fragment>
      <h1>Game Home</h1>

      <div>
        {game.map((data) => (
          gameComponent(data)
        ))}
      </div>
      <div>
        <h1>Add New Game</h1>
        <form method="POST" action="http://localhost:8080/add-game">
          <div>
            <label>Name</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label>Image</label>
            <input type="text" name="image" required />
          </div>
          <div>
            <label>Description</label>
            <input type="text" name="description" required />
          </div>
          <div>
            <label>Difficulty</label>
            <input type="text" name="difficulty" required />
          </div>
          <div>
            <label>Average Playtime</label>
            <input type="text" name="length" required />
          </div>
          <div>
            <label>Rating</label>
            <input type="text" name="rating" required />
          </div>

          <div>
            <button type="submit">Add Game</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default App;