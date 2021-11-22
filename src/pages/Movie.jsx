import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMovie } from "../actions";

const Movie = ({ movie, getMovie }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (url) getMovie(url);
    getMovie(new URLSearchParams(window.location.search).get("id"));
  }, [url]);

  useEffect(() => {
    window.onpopstate = function () {
      setUrl(new URLSearchParams(window.location.search).get("id"));
    };
  }, []);
  //TODO add slider
  if (movie) {
    return (
      <div className="movie">
        <h3 className="movie__name">{movie.title}</h3>
        <div className="casting">
          {movie?.cast
            ?.slice(0, movie?.cast.length > 10 ? 10 : movie?.cast.length)
            .map(({ name, id }) => {
              return (
                <Link to={{ pathname: "/actor", search: `?id=${id}` }}>
                  <div className="name">{name}</div>
                </Link>
              );
            })}
        </div>
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
          alt=""
          className="movie__image"
        />
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt=""
          className="movie__image"
        />
        <div className="movie__genres">
          {movie?.genres?.map(({ id, name }) => {
            return <div className="genre">{name}</div>;
          })}
        </div>
        <div className="movie__description">{movie.overview}</div>
        <div className="movie__rating">{movie.vote_average}</div>
        <button>add to liked movies</button>
        <h3>similar movies</h3>
        {movie.similarMovies?.map(({ poster_path, id }) => {
          return (
            <Link to={{ pathname: "/movie", search: `?id=${id}` }}>
              <img
                onClick={() => {
                  setUrl(id);
                  window.scroll(0, 0);
                }}
                src={"https://image.tmdb.org/t/p/w500/" + poster_path}
                alt=""
              />
            </Link>
          );
        })}
      </div>
    );
  }
  return "";
};

const mapStateToProps = (state) => {
  return { movie: state.getMovie };
};
export default connect(mapStateToProps, {
  getMovie,
})(Movie);
