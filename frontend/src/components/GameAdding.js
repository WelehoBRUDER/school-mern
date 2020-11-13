const addComponent = () => {
  return (
    <div>
      <form method="POST" action="http://localhost:8080/add-game">
        <div className="gameEdit">
          <label>Game title</label>
          <input type="text" name="name" required />
        </div>
        <div className="gameEdit">
          <label>Image url/b64</label>
          <input type="text" name="image" required />
        </div>
        <div className="gameEdit"><label>Description: </label></div>
        <div className="gameEdit">
          <textarea name="description" required />
        </div>
        <div className="gameEdit">
          <label>Difficulty</label>
          <input type="text" name="difficulty" required />
        </div>
        <div className="gameEdit">
          <label>Playtime</label>
          <input type="text" name="length" required />
        </div>
        <div className="gameEdit">
          <label>Last thoughts</label>
          <input type="text" name="final_thoughts" required />
        </div>
        <div className="gameEdit">
          <label>Your rating</label>
          <input type="number" name="rating" min="0" max="10" defaultValue="5" required />
        </div>
        <div>
          <button className="gameEditSubmit" type="submit">Add Game To List</button>
          <input type="button" className="gameEditSubmit" value="Back" onClick={()=>{window.location.href="/"}} />
        </div>
      </form>
    </div>
  );
}

export default addComponent;