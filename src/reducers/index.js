import { combineReducers } from "redux";
import home from "./homeReducer";
import cards from "./cardReducer";

const genres = (state = [], action) => {
  if (action.type == "FETCH_GENRES") {
    return action.payload;
  }
  return state;
};
const topRated = (state = [], action) => {
  if (action.type == "FETCH_TOPRATED") {
    return action.payload;
  }
  return state;
};
export default combineReducers({
  home,
  cards,
  genres,
  topRated,
});
