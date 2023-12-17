import { useState } from "react";
import "./App.css";
import Movie from "./compoents/Movie";

function App() {
  const api_search =
    "https://api.themoviedb.org/3/search/movie?api_key=55a873b5a2d9c79525db8ddeca08cb35&query=";
  const [movies, setMovies] = useState([]);
  const handleSearch = (e) => {
    e.preventDefault();
    fetch(api_search + term)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };
  const [term, setTerm] = useState("");

  return (
    <div className="App">
      <h1>Hello </h1>
      <div className="search-nav">
        <div>
          <h1>Tittle </h1>
        </div>
        <div>
          <form onSubmit={handleSearch}>
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                class="form-control search"
                placeholder="Search"
                onChange={(e) => setTerm(e.target.value)}
              />

              <button className="btn btn-info">Search</button>
            </div>
          </form>
        </div>
      </div>
      <div className="movies">
        <Movie m={movies} />
      </div>
    </div>
  );
}

export default App;
