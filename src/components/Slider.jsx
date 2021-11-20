import React, { useEffect, useRef, useState } from "react";
import Card from "./MovieCard";
import { connect } from "react-redux";

function Slider({ data, genres }) {
  const [startX, setStartX] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [x, setX] = useState(0);
  const slider = useRef(null);
  const parentSlider = useRef(null);
  const handleUserMouse = (e) => {
    if (!pressed) return;
    e.preventDefault();
    console.log(x, startX);
    setX(e.offsetX);

    slider.current.style.left = `${x - startX}px`;
  };
  useEffect(() => {
    parentSlider.current.addEventListener("mousedown", (e) => {
      e.preventDefault();
      setPressed(true);
      setStartX(e.offsetX - slider.current.offsetLeft);
      parentSlider.current.style.cursor = "grabbing";
    });
    parentSlider.current.addEventListener("mouseenter", () => {
      parentSlider.current.style.cursor = "grab";
    });
    window.addEventListener("mouseleave", () => {
      parentSlider.current.style.cursor = "default";
    });
    parentSlider.current.addEventListener("mouseup", () => {
      parentSlider.current.style.cursor = "grab";
    });
    window.addEventListener("mouseup", () => {
      setPressed(false);
    });
    window.addEventListener("mousemove", handleUserMouse);
    // return () => {
    //   return window.removeEventListener("mousemove", handleUserMouse);
    // };
  });

  return (
    <div ref={parentSlider} className="slider-container">
      <div ref={slider} className={`slider first`}>
        {new Array(10).fill("").map((_, i) => {
          if (data) {
            return (
              <Card
                key={i}
                image={
                  "https://image.tmdb.org/t/p/w500/" + data[i]?.poster_path
                }
                onClick={() => {
                  console.log("movie");
                }}
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return { cards: state.cards, genres: state.genres };
};
export default connect(mapStateToProps)(Slider);
