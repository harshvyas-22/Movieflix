import { useState } from "react";
import "./App.css";
import Movie from "./compoents/Movie";

function App() {
  const api_search =
    "https://api.themoviedb.org/3/search/movie?api_key=55a873b5a2d9c79525db8ddeca08cb35&query=";
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(api_search + term);
      const data = await response.json();
      console.log(data.results);

      setMovies(data.results);
    } catch (error) {
      console.error("Error on fetching search resultz:", error);
    }
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <div className="search-nav">
        <div>
          <h1>Title</h1>
        </div>
        <div>
          <form onSubmit={handleSearch}>
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control search"
                placeholder="Search"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />

              <button className="btn btn-info" type="submit">
                Search
              </button>
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
