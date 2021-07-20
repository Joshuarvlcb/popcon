import React, { useEffect } from "react";
import Slider from "./Slider";
import { connect } from "react-redux";
function Popular({ cards, title, data, marginBottom }) {
  useEffect(() => {
    console.log(cards);
  }, []);
  return (
    <div className={`popular ${marginBottom ? "margin-max" : ""}`}>
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
