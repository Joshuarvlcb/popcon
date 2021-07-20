import React, { useEffect } from "react";
import Footer from "./Footer";
import Home from "./Home";
import Popular from "./Popular";
import { topRated, cards } from "../actions";
import { connect } from "react-redux";

function Landing({ cards, topRated, cardsArr, topRatedArr }) {
  useEffect(() => {
    cards();
    topRated();
  }, []);
  return (
    <div className="landing">
      <Home />
      <Footer />
      <Popular title="Most Popular" data={cardsArr} marginBottom={false} />
      <Popular title="Top Rated" data={topRatedArr} marginBottom={true} />
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return { cardsArr: state.cards, topRatedArr: state.topRated };
};
export default connect(mapStateToProps, {
  topRated,
  cards,
})(Landing);
