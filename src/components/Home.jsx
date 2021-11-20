import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineConsoleSql, AiOutlineStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import { RiHeartAddFill } from "react-icons/ri";
import { forward, back, home, genre, cards, topRated } from "../actions";
import { connect } from "react-redux";
function Home({
  home,
  forward,
  back,
  current,
  items,
  genre,
  genresArr,
  setLoader,
}) {
  const [stop, setStop] = useState(false);

  setLoader(items);

  useEffect(() => {
    home();
    const time = setInterval(() => {
      forward();
      console.log(stop);
      if (stop) {
        clearInterval(time);
        setTimeout(() => {
          console.log("hey timeout");
          setInterval(time, 3000);
          setStop(false);
        }, 3000);
      }
    }, 3000);
    genre();
    cards();
    topRated();
    return () => {
      clearInterval(time);
    };
  }, [stop]);
  const title = () => {
    if (items) return items[current].title;
    else return "";
  };
  const rating = () => {
    if (items) return items[current].vote_average;
    else return "";
  };
  const year = () => {
    if (items) return new Date(items[current].release_date).getFullYear();
    else return "";
  };
  const images = () => {
    if (items)
      return "https://image.tmdb.org/t/p/w1280/" + items[current].backdrop_path;
    else return "";
  };
  const overview = () => {
    if (items) return items[current].overview;
    else return "";
  };
  return (
    <div className="homeScreen">
      <div className="gradient">
        <div className="buttons-container">
          <MdKeyboardArrowLeft
            className="back"
            onClick={(e) => {
              e.preventDefault();
              back();
              setStop(true);
            }}
          />
          <MdKeyboardArrowRight
            className="forward"
            onClick={(e) => {
              e.preventDefault();

              forward();
              setStop(true);
            }}
          />
        </div>
        <div className="content">
          {/* <div className="content__rate">8.2</div> */}
          <div className="content__title">{title()}</div>
          <div className="content__stats">
            <div className="content__stats__rate">
              <AiOutlineStar className="stat" />
              IMDB:{rating()}
            </div>
            <div className="content__stats__duration">
              <AiOutlineClockCircle className="stat" />
              DURATION:1H 58M
            </div>
            <div className="content__stats__year">
              <AiOutlineCalendar className="stat" />
              YEAR:{year()}
            </div>
          </div>
          <div className="content__gist">{overview()}</div>
          <div className="content__buttons">
            <button>
              <div className="content__buttons_con">
                play <BsPlayFill className="play" />
              </div>
            </button>
            <button>
              <div className="content__buttons_con">
                Add <RiHeartAddFill className="add" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <img src={images()} className="image" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.home.items,
    current: state.home.current,
    genresArr: state.genres,
  };
};

export default connect(mapStateToProps, {
  home,
  forward,
  back,
  genre,
  cards,
  topRated,
})(Home);
