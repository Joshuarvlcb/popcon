import React, { useEffect, useRef, useState } from "react";
import Card from "./MovieCard";
import { connect } from "react-redux";
import { useSearchContext } from "../util/context";

function Slider({ data, genres }) {
  const [startX, setStartX] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [x, setX] = useState(0);
  const slider = useRef(null);
  const parentSlider = useRef(null);
  const { getUrl } = useSearchContext();

  const handleUserMouse = (e) => {
    if (!pressed) return;
    e.preventDefault();
    setX(e.offsetX);
    slider.current.style.left = `${x - startX}px`;
    console.log(e.offsetX);
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
      console.log(pressed);
      setPressed(false);
    });

    window.addEventListener("mousemove", handleUserMouse);

    return () => {
      window.removeEventListener("mousemove", handleUserMouse);
    };
  }, []);

  return (
    <div ref={parentSlider} className="slider-container">
      <div ref={slider} className={`slider first`}>
        {new Array(10).fill("").map((_, i) => {
          if (data) {
            return (
              <div
                className={"card-div"}
                onClick={() => {
                  getUrl(new URLSearchParams(window.location.search).get("id"));
                  window.scroll(0, 0);
                }}
              >
                <Card
                  key={i}
                  image={
                    "https://image.tmdb.org/t/p/w200/" + data[i]?.poster_path
                  }
                  rate={Math.round(data[i]?.vote_average)}
                  title={data[i]?.title}
                  id={data[i]?.id}
                  genresArr={genres

                    ?.filter(({ id, name }) => {
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
              </div>
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
