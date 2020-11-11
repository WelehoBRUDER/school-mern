import React, { Fragment, useEffect, useState } from 'react';

import gameThumbnail from './components/Thumb.js';
import gameComponent from './components/Game.js';

import './styling/header.css';
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
      <div id ="mainHeader">
      <h1>My Game List</h1>
      </div>

      <div id="gameList">
        {game.map((data) => (
          gameThumbnail(data)
        ))}
      </div>
      {/* <div>
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
      </div> */}
    </Fragment>
  );
};

export default App;