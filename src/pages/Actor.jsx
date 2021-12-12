import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getActor } from "../actions";
import { useSearchContext } from "../util/context";
import Slider from "../components/Slider";
const Actor = ({ getActor, actorData }) => {
  const { toggleLoader } = useSearchContext();
  useEffect(() => {
    getActor(new URLSearchParams(window.location.search).get("id"));

    setTimeout(() => {
      toggleLoader(false);
    }, 600);
  }, []);
  return (
    <div className="actor">
      <div className="flex">
        <img
          className="actor__profile"
          src={"https://image.tmdb.org/t/p/w200/" + actorData?.profile_path}
          alt=""
        />
        <div className="column actor-details">
          <h1 className="actor__namee">{actorData?.name}</h1>
          <div className="actor__description">{actorData?.biography}</div>
        </div>
      </div>
      <h3 className="known-for">known for</h3>
      <Slider data={actorData?.stared} />
      <div className="margin-bottom"></div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { actorData: state.actor };
};
export default connect(mapStateToProps, {
  getActor,
})(Actor);
