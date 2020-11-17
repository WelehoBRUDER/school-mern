import React, { useEffect, useState } from 'react';

import gameThumbnail from '../components/Thumb.js';
import sortList from '../components/sort.js';

const App = () => {
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
  sortList(game, true, "name", true);
  return (
    <>
      <div id="gameList">
        {game.map((data) => (
          gameThumbnail(data)
        ))}
      </div>
      <button id="addGame" title="Add new entry" onClick={()=>window.location.href="/add-game"}>+</button>
    </>
  );
};

export default App;