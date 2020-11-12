import React, { useEffect, useState } from 'react';

import gameThumbnail from '../components/Thumb.js';


import '../styling/header.css';
import '../styling/game.css';

const App = (props) => {
  useEffect(() => {
    const getAPI = async () => { 
        const response = await fetch('http://localhost:8080/');
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
      <div id="gameList">
        {game.map((data) => (
          gameThumbnail(data)
        ))}
      </div>
      <button id="addGame" onClick={()=>window.location.href="/add-game"}>+</button>
    </>
  );
};

export default App;