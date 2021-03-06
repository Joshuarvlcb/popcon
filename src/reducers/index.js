import { combineReducers } from "redux";
import home from "./homeReducer";
import cards from "./cardReducer";

const genres = (state = [], action) => {
  if (action.type === "FETCH_GENRES") {
    return action.payload;
  }
  return state;
};
const topRated = (state = [], action) => {
  if (action.type === "FETCH_TOPRATED") {
    return action.payload;
  }
  return state;
};
const getMovie = (state = {}, action) => {
  if (action.type === "FETCH_MOVIE") {
    return action.payload;
  }
  return state;
};
const actor = (state = {}, action) => {
  if (action.type === "FETCH_ACTOR") {
    return action.payload;
  }
  return state;
};
const search = (state = [], action) => {
  if (action.type === "FETCH_SEARCH") {
    return { data: action.payload.data, results: action.payload.pages };
  }
  return state;
};
const watchlistMovies = (state = [], payload) => {
  if (payload.type === "ADD_MOVIE") {
    if (
      state.find(({ title }) => {
        return title === payload.movie.title;
      })
    ) {
      return state.filter(({ title }) => {
        return title !== payload.movie.title;
      });
    }

    return [...state, payload.movie];
  }
  return state;
};

export default combineReducers({
  home,
  cards,
  genres,
  topRated,
  getMovie,
  actor,
  search,
  watchlistMovies,
});
