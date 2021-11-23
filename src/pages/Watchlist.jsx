import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../components/MovieCard";
const Watchlist = ({ likedMovies, genres }) => {
  useEffect(() => {
    console.log(likedMovies);
  }, [likedMovies]);

  if (likedMovies.length === 0) {
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
          ({
            genre_ids,
            genres: gen,
            vote_average,
            title,
            id,
            poster_path,
          }) => {
            console.log(genre_ids);
            return (
              <Card
                image={"https://image.tmdb.org/t/p/w200/" + poster_path}
                title={title}
                id={id}
                genresArr={
                  gen
                    ? gen.filter(({ name }, i) => {
                        if (i <= 1) {
                          return name;
                        }
                      })
                    : genres
                        ?.filter(({ id, name }) => {
                          return genre_ids?.find(function (currId) {
                            if (currId === id) {
                              return name;
                            }
                          });
                        })
                        .filter(({ name }, i) => {
                          if (i <= 1) {
                            return name;
                          }
                        })
                }
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
  return { likedMovies: state.watchlistMovies, genres: state.genres };
};
export default connect(mapStateToProps)(Watchlist);
