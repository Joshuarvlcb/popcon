import React from "react";
import Card from "./MovieCard";
import { connect } from "react-redux";

function Slider({ cards, data, genres }) {
  return (
    <div className="slider first">
      {new Array(10).fill("").map((_, i) => {
        if (data) {
          return (
            <Card
              key={i}
              image={"https://image.tmdb.org/t/p/w500/" + data[i]?.poster_path}
              rate={data[i]?.vote_average}
              title={data[i]?.title}
              genresArr={genres
                .filter(({ id, name }) => {
                  return data[i]?.genre_ids.find(function (currId) {
                    if (currId == id) {
                      return name;
                    }
                  });
                })
                .filter(({ name }, i) => {
                  if (i <= 1) {
                    return name;
                  }
                })}
            />
          );
        }
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { cards: state.cards, genres: state.genres };
};
export default connect(mapStateToProps)(Slider);
