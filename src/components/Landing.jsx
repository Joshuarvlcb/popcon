import React, { useEffect } from "react";
import Footer from "./Footer";
import Home from "./Home";
import Popular from "./Popular";
import { topRated, cards } from "../actions";
import { connect } from "react-redux";

function Landing({ cards, topRated, cardsArr, topRatedArr, setLoader }) {
  useEffect(() => {
    cards();
    topRated();
    setLoader(cardsArr);
  }, []);
  useEffect(() => {});
  return (
    <div className="landing">
      <Home setLoader={setLoader} />
      <Popular title="Most Popular" data={cardsArr} marginBottom={false} />
      <Popular title="Top Rated" data={topRatedArr} marginBottom={true} />
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => {
  return { cardsArr: state.cards, topRatedArr: state.topRated };
};
export default connect(mapStateToProps, {
  topRated,
  cards,
})(Landing);
