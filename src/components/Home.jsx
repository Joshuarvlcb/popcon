import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineConsoleSql, AiOutlineStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiCalendarHeart } from "react-icons/bi";
import { BsPlayFill } from "react-icons/bs";
import { RiHeartAddFill } from "react-icons/ri";
import movieDb from "../apis/movie";
import { forward, back, home } from "../actions";
import { connect } from "react-redux";
function Home({ home, forward, back, current, items }) {
  const [image, setImage] = useState("");
  useEffect(() => {
    movieDb
      .get("popular?api_key=2212668cd8ad1eca01050d6cc3907a99")
      .then((res) => {
        console.log(res.data.results[0]);
        setImage(
          "https://image.tmdb.org/t/p/w1280/" +
            res.data.results[0].backdrop_path
        );
      });
    home();
    console.log(items);
  }, []);
  const title = () => {
    if (items) return items[current].title;
    else return "";
  };
  const images = () => {
    if (items)
      return "https://image.tmdb.org/t/p/w1280/" + items[current].backdrop_path;
    else return "";
  };
  return (
    <div className="home">
      <div className="gradient">
        <div className="buttons-container">
          <MdKeyboardArrowLeft
            className="back"
            onClick={() => {
              back();
              console.log(current);
            }}
          />
          <MdKeyboardArrowRight
            className="forward"
            onClick={() => {
              forward();
              console.log(current);
            }}
          />
        </div>
        <div className="content">
          {/* <div className="content__rate">8.2</div> */}
          <div className="content__title">{title()}</div>
          <div className="content__stats">
            <div className="content__stats__rate">
              <AiOutlineStar className="stat" />
              IMDB:7.4
            </div>
            <div className="content__stats__duration">
              <AiOutlineClockCircle className="stat" />
              DURATION:1H 58M
            </div>
            <div className="content__stats__year">
              <BiCalendarHeart className="stat" />
              YEAR:2021
            </div>
          </div>
          <div className="content__gist">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
            dolores rerum ipsa aperiam, veniam corporis sit iure, nobis sint
            ullam animi possimus itaque cupiditate quam dolorem molestiae fugit
            veritatis alias?
          </div>
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
  return { items: state.home.items, current: state.home.current };
};

export default connect(mapStateToProps, {
  home,
  forward,
  back,
})(Home);
