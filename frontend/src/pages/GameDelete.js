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
    <div className="deletion">
      <h1 className="deletionTitle">YOU ARE ABOUT TO PERMANENTLY REMOVE "{game.name ? game.name.toUpperCase() : ""}"</h1>
      <h2 className="deletionSubtitle">THIS ACTION CAN NOT BE REVERSED.</h2>
      <form method="POST" action={"http://localhost:8080/delete"} id="del">
        <input hidden type="text" defaultValue={game._id} name="gameId"></input>
        <button className="deletionAccept" type="submit">CONFIRM</button>
        <button className="deletionCancel" type="button" onClick={()=>{window.location.href="/view/" + game._id}}>CANCEL</button>
      </form>
    </div>
  )
}

export default GameDelete;