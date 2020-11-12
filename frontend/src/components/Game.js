import EditLogo from "../img/pencil.png";

const gameComponent = (props) => {
  return (
    <div>
      <div key={props._id} className="game">
        <ul>
          <h1>{props.name}</h1>
          <img src={props.image} alt={props.name} />
          <div className="gameContent">
            <p className="gameSubTitle">What is it? </p>
            <p>{props.description ? props.description : "None"}</p>
            <p className="gameSubTitle">How hard is it? </p>
            <p>{props.difficulty ? props.difficulty : "None"}</p>
            <p className="gameSubTitle">How long to beat it? </p>
            <p>{props.length ? props.length : "None"}</p>
            <p className="gameSubTitle">Final thoughts</p>
            <p>{props.final_thoughts ? props.final_thoughts : "None"}</p>
          </div>
          <p className="Rating" style={{background: colors[props.rating]}}>{props.rating ? "Rated " + props.rating + "/10 | " + ratings[props.rating] : "None"}</p>
        </ul>
      </div>
      <img src={EditLogo} id="gameEditBut" alt="Pencil" onClick={()=>window.location.href="/edit-game/" + props._id} />
    </div>
  );
}

const ratings = {
  0: "Horrible",
  1: "Very bad",
  2: "Bad",
  3: "Very underwhelming",
  4: "Boring",
  5: "Okay",
  6: "Decent",
  7: "Pretty Good",
  8: "Good",
  9: "Excellent",
  10: "Perfect"
}

const colors = {
  0: "rgba(255, 0, 0, 0.33)",
  1: "rgba(206, 15, 15, 0.33)",
  2: "rgba(168, 18, 18, 0.33)",
  3: "rgba(134, 15, 15, 0.33)",
  4: "rgba(85, 10, 10, 0.33)",
  5: "rgba(136, 136, 136, 0.33)",
  6: "rgba(187, 187, 187, 0.33)",
  7: "rgba(21, 56, 24, 0.33)",
  8: "rgba(15, 73, 20, 0.33)",
  9: "rgba(38, 189, 50, 0.33)",
  10: "rgba(52, 255, 69, 0.33)"
}

export default gameComponent;