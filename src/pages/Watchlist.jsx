import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../components/MovieCard";
const Watchlist = ({ likedMovies }) => {
  useEffect(() => {
    console.log(likedMovies);
  }, [likedMovies]);

  if (likedMovies.length == 0) {
    return (
      <div className="watchlist">
        <h1>Add movies</h1>
      </div>
    );
  }
  return (
    <div className="watchlist">
      <h1>Watchlist</h1>
      {/* //{ image, rate, title, genresArr, id } */}
      <div className="watchlist-conatainer">
        {likedMovies.map(
          ({ genre_ids, vote_average, title, id, poster_path }) => {
            return (
              <Card
                image={"https://image.tmdb.org/t/p/w200/" + poster_path}
                title={title}
                id={id}
                genresArr={genre_ids}
                rate={vote_average}
              />
            );
          }
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { likedMovies: state.watchlistMovies };
};
export default connect(mapStateToProps)(Watchlist);
