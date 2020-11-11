const gameComponent = (props) => {
  return (
    <div>
      <div key={props._id} className="game">
        <ul>
            <h1>
              <a href="/{props.id}">{props.name}</a>
            </h1>
            <img src={props.image} alt={props.name} />
            <p className="gameSubTitle">What is it? </p>
            <p>{props.description ? props.description : "None"}</p>
            <p className="gameSubTitle">How hard is it? </p>
            <p>{props.difficulty ? props.difficulty : "None"}</p>
            <p className="gameSubTitle">How long to beat it? </p>
            <p>{props.length ? props.length : "None"}</p>
            <p className="gameSubTitle">Rating</p>
            <p>{props.rating ? props.rating : "None"}</p>
        </ul>
      </div>
    </div>
  );
}

export default gameComponent;