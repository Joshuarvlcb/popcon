import React, { useEffect, useState } from "react";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiCalendarHeart } from "react-icons/bi";
import { BsPlayFill } from "react-icons/bs";
import { RiHeartAddFill } from "react-icons/ri";
import movieDb from "../apis/movie";
function Home() {
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
    console.log(image);
  }, []);
  return (
    <div className="home">
      <div className="gradient">
        <div className="buttons-container">
          <BiLeftArrow className="back" />
          <BiRightArrow className="forward" />
        </div>
        <div className="content">
          {/* <div className="content__rate">8.2</div> */}
          <div className="content__title">Black Widow</div>
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

      <img src={image} className="image" />
    </div>
  );
}

export default Home;
