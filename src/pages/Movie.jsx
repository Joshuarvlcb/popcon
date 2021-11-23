import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMovie } from "../actions";
import { AiOutlineStar } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import { RiHeartAddFill } from "react-icons/ri";
import { useSearchContext } from "../util/context";
import Slider from "../components/Slider";
import { addingToWatchlist } from "../actions";

const Movie = ({ movie, getMovie, addingToWatchlist, watchlist }) => {
  const { url, getUrl } = useSearchContext();
  useEffect(() => {
    if (url) getMovie(url);
    getMovie(new URLSearchParams(window.location.search).get("id"));
    console.log(movie.cast);
  }, [url]);

  useEffect(() => {
    window.onpopstate = function () {
      getUrl(new URLSearchParams(window.location.search).get("id"));
    };
  }, []);
  //TODO add slider
  if (movie) {
    return (
      <div className="movie">
        <div className="image_container">
          <img
            src={"https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path}
            alt=""
            className="movie__image"
          />
          <div className="image_gradient"></div>
        </div>

        <div className="content_container">
          <img
            src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
            alt=""
            className="movie__poster-image"
          />
          <div className="content_details">
            <h3 className="movie__name">{movie.title}</h3>
            <div className="movie__genres">
              {movie?.genres?.map(({ id, name }) => {
                return <div className="genre">{name}</div>;
              })}
            </div>
            <div className="movie__description">{movie.overview}</div>
            <div className="content__stats__rate movie__rating">
              <AiOutlineStar className="stat" />
              {movie.vote_average} IMDB Rating
            </div>

            <div className="content__buttons">
              <button className="btn-play">
                <div className="content__buttons_con">
                  play <BsPlayFill className="play" />
                </div>
              </button>
              <button className="btn-add">
                <div
                  className="content__buttons_con"
                  onClick={() => {
                    addingToWatchlist(movie);
                  }}
                >
                  Add{" "}
                  <RiHeartAddFill
                    className={`menu__icon add ${
                      watchlist.find(({ title }) => title === movie.title)
                        ? "heart"
                        : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <h3 className="similar-movies cast">cast</h3>
        <div className="casting">
          {movie?.cast
            ?.slice(0, movie?.cast.length > 10 ? 10 : movie?.cast.length)
            ?.filter(function ({ profile_path }) {
              return profile_path != null;
            })
            .map(({ name, id, character, profile_path }) => {
              return (
                <Link
                  className="none link-height"
                  to={{ pathname: "/actor", search: `?id=${id}` }}
                >
                  <div className="actor-item">
                    <img
                      className="actor__image"
                      src={"https://image.tmdb.org/t/p/w500/" + profile_path}
                      alt=""
                    />
                    <div className="column">
                      <div className="actor__name">{name}</div>
                      <div className="actor__character">{character}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>

        <h3 className="similar-movies">similar movies</h3>
        {/* {movie.similarMovies?.map(({ poster_path, id }) => {
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
        })} */}
        <Slider data={movie.similarMovies} className="margin" />
        <div className="margin-bottom"></div>
      </div>
    );
  }
  return "";
};

const mapStateToProps = (state) => {
  return { movie: state.getMovie, watchlist: state.watchlistMovies };
};
export default connect(mapStateToProps, {
  getMovie,
  addingToWatchlist,
})(Movie);
