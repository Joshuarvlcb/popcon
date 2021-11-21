import React from "react";
import { Link } from "react-router-dom";
function MovieCard({ mini, image, rate, title, genresArr }) {
  return (
    <Link to="/movie">
      <div
        onClick={() => {
          console.log(rate);
        }}
        className="card-container"
      >
        <div className="card">
          <img className="card_image" src={image} alt="" />
          <div className={`card_rating ${rate > 8 ? "good" : ""}`}>{rate}</div>
          <div className="card_title">{title}</div>
          <div className="card_genres">
            {genresArr
              .map(({ name }) => {
                return name;
              })
              .join(",")}
          </div>
        </div>
      </div>
    </Link>
  );
}
export default MovieCard;
