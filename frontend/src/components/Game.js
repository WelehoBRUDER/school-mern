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
          <p class="Rating">{props.rating ? props.rating + " - " + ratings[props.rating] : "None"}</p>
        </ul>
      </div>
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
  10: "Nearly Perfect"
}

export default gameComponent;