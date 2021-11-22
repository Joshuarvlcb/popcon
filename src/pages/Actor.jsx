import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getActor } from "../actions";
const Actor = ({ getActor, actorData }) => {
  useEffect(() => {
    getActor(new URLSearchParams(window.location.search).get("id"));
    console.log(actorData);
  }, []);
  return (
    <div className="actor">
      <div className="actor__name">{actorData?.name}</div>
      <div className="actor__description">{actorData?.biography}</div>
      <img
        className="actor__image"
        src={"https://image.tmdb.org/t/p/w500/" + actorData?.profile_path}
        alt=""
      />
      <div className="actor__recomended"></div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { actorData: state.actor };
};
export default connect(mapStateToProps, {
  getActor,
})(Actor);
