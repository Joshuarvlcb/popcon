import React, { useState, useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import { cards } from "../actions/index";
import { connect } from "react-redux";
import Landing from "./Landing";
function App({ cards, state }) {
  useEffect(() => {
    cards();
  }, []);

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    console.log(state);
    if (state.cards.length !== 0) {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
  }, [state]);
  const loaderStop = (data) => {
    console.log("hi");
  };
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
            <Landing setLoader={loaderStop} />
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
