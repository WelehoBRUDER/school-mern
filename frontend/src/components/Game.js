import EditLogo from "../img/pencil.png";
import config from '../config.json';

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
          <p className="Rating" style={{background: config.colors[props.rating]}}>{props.rating || props.rating === 0 ? "Rated " + props.rating + "/10 | " + config.rates[props.rating] : "None"}</p>
        </ul>
      </div>
      <form method="GET" action={"http://localhost:8080/edit-game/" + props._id}>
      <img type="submit" src={EditLogo} id="gameEditBut" alt="Pencil" title="Edit this entry" onClick={()=>window.location.href="/edit-game/" + props._id} />
      </form>
    </div>
  );
}

export default gameComponent;