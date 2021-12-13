import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMovie } from "../actions";

function MovieCard({ image, rate, title, genresArr, id }) {
  return (
    <Link className="none" to={{ pathname: "/movie", search: `?id=${id}` }}>
      <div className="card-container">
        <div className="card">
          <img
            className="card_image"
            src={
              image !== "https://image.tmdb.org/t/p/w220_and_h330_face/null"
                ? image
                : "https://cdn4.vectorstock.com/i/1000x1000/22/08/cinema-hall-movie-interior-with-coming-soon-text-vector-22762208.jpg"
            }
            alt=""
          />
          <div className={`card_rating ${rate > 8 ? "good" : ""}`}>
            {rate || "cs"}
          </div>
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
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps, {
  getMovie,
})(MovieCard);
