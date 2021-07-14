import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

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
      <div className="gradient"></div>
      <img src={image} className="image" />
    </div>
  );
}

export default Home;
