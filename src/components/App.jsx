import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Route, Routes } from "react-router";
import Nav from "./Nav";
import { cards } from "../actions/index";
import { connect } from "react-redux";
import Landing from "./Landing";
import MoviePage from "../pages/Movie";
import Actor from "../pages/Actor";
import Search from "../pages/Search";
function App({ cards, state }) {
  useEffect(() => {
    cards();
  }, []);

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (state.cards.length !== 0) {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
  }, [state]);
  const loaderStop = (data) => {};
  return (
    <>
      {loader ? (
        <div className="body">
          {" "}
          <div className="spinner">
            <div className="inner one"></div>
            <div className="inner two"></div>
            <div className="inner three"></div>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <div className="home">
            <Nav />
            <Routes>
              <Route
                exact
                path="/home"
                element={<Landing setLoader={loaderStop} />}
              />
              <Route exact path="/actor" element={<Actor />} />
              <Route exact path="/movie" element={<MoviePage />} />
              <Route exact path="/Search" element={<Search />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  return { state };
};
export default connect(mapStateToProps, {
  cards,
})(App);
