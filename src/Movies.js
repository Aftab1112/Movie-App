import React from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <section className>
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <section className="container movie-page">
      <div className="container grid grid-4-col">
        {movie.map((currMovie) => {
          const { imdbID, Title, Poster } = currMovie;
          return (
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className="card">
                <div className="card-info">
                  <h2>
                    {Title.length <= 15
                      ? Title
                      : Title.substring(0, 15) + "..."}
                  </h2>
                  <img src={Poster} alt={imdbID} />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
