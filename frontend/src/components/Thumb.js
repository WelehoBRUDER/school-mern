import config from '../config.json';

const thumbComponent = (props) => {
  return (
    <div>
      <div key={props._id} className="gameThumb">
        <ul>
            <h1>
              <a href={"http://localhost:3000/view/" + props._id} title={props.name}>{props.name}</a>
            </h1>
            <img src={props.image} alt={props.name} />
            <p className="thumbDesc">{props.description ? props.description : "None"}</p>
            <div className="thumbRate" style={{background: config.colors[props.rating]}}>{props.rating || props.rating === 0 ? props.rating : "?"}</div>
        </ul>
      </div>
    </div>
  );
}

export default thumbComponent;