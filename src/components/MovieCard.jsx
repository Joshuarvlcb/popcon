import React from "react";

function MovieCard({ mini, image, rate, title, genresArr }) {
  return (
    <div className="card-container">
      <div className="card" onClick={() => console.log(mini)}>
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
  );
}
export default MovieCard;
