import React, { useEffect, useState } from 'react';

import gameThumbnail from '../components/Thumb.js';
import sortList from '../components/sort.js';

const search = window.location.href.split("/search/")[1];
console.log(search);

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
          data.name.toLowerCase().indexOf(search.replaceAll("%20", " ").toLowerCase()) !== -1 ?  gameThumbnail(data) : ""
        ))}
      </div>
      <button id="addGame" title="Add new entry" onClick={()=>window.location.href="/add-game"}>+</button>
    </>
  );
};

export default App;