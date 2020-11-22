import SearchIcon from "../img/magnifying-glass.png";

const Header = () => {
  return (
    <div id="mainHeader">
      <h1>
        <a href="http://localhost:3000">My Game List</a>
      </h1>
      <div className="headerInput">
        <input type="text" id="searchQuery" autoComplete="off" />
        <button onClick={search}>
          <img src={SearchIcon}></img>
        </button>
      </div>
    </div>
  )
}

function search() {
  window.location.href = "/search/" + document.getElementById("searchQuery").value;
}

export default Header;