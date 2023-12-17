import React, { useEffect, useState } from "react";

function Movie() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=55a873b5a2d9c79525db8ddeca08cb35"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  const api_img = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="container mt-5">
      <h2 className="text-center">MovieFlix</h2>
      <div className="row justify-content-center">
        {movieList.map((movie, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card movie_card">
              <img
                src={api_img + movie.poster_path}
                alt={movie.title}
                style={{
                  width: "300px",
                  height: "250px",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <span className="movie_info">{movie.overview}</span>
                <span className="movie_info">{movie.popularity}</span>

                <br />
                <span className="movie_info">
                  Released on: {movie.release_date}
                </span>
                <br />
                <span className="movie_info float-right">
                  Vote: {movie.vote}
                </span>
                <span className="movie_info">{movie.vote_count}</span>
                <br />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Movie;
