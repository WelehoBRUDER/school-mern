const editComponent = (props) => {
  return (
    <div>
      <form method="POST" action="http://localhost:8080/edit-game">
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
          <select id="rating" name="rating">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <button className="gameEditSubmit" type="submit">Save Edits</button>
        </div>
      </form>
    </div>
  );
}

export default editComponent;