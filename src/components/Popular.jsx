import React, { useEffect } from "react";
import Slider from "./Slider";
import { connect } from "react-redux";
import { topRated } from "../actions";
function Popular({ cards, title, data }) {
  useEffect(() => {
    console.log(cards);
  }, []);
  return (
    <div className="popular">
      <h1 className="popular__title">{title}</h1>
      <Slider data={data.slice(0, 10)} />
      <Slider data={data.slice(10)} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return { cards: state.cards };
};
export default connect(mapStateToProps)(Popular);
