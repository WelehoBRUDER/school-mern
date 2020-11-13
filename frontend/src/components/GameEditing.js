const editComponent = (props) => {
  return (
    <div>
      <form method="POST" action={"http://localhost:8080/edit-game"}>
        <input id="dumbhack" type="text" name="gameId" defaultValue={props._id} readOnly />
        <div className="gameEdit">
          <label>Game title</label>
          <input type="text" name="name" defaultValue={props.name} required />
        </div>
        <div className="gameEdit">
          <label>Image url/b64</label>
          <input type="text" name="image" defaultValue={props.image} required />
        </div>
        <div className="gameEdit"><label>Description: </label></div>
        <div className="gameEdit">
          <textarea name="description" defaultValue={props.description} required />
        </div>
        <div className="gameEdit">
          <label>Difficulty</label>
          <input type="text" name="difficulty" defaultValue={props.difficulty} required />
        </div>
        <div className="gameEdit">
          <label>Playtime</label>
          <input type="text" name="length" defaultValue={props.length} required />
        </div>
        <div className="gameEdit">
          <label>Last thoughts</label>
          <input type="text" name="final_thoughts" defaultValue={props.final_thoughts} required />
        </div>
        <div className="gameEdit">
          <label>Your rating</label>
          <input type="number" name="rating" defaultValue={props.rating} min="0" max="10" required />
        </div>
        <div>
          <button className="gameEditSubmit" type="submit">Save Edits</button>
          <input type="button" className="gameEditSubmit" value="Back" onClick={()=>{window.location.href="/view/" + props._id}} />
        </div>
      </form>
    </div>
  );
}

export default editComponent;