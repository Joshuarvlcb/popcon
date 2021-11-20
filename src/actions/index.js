import movieApi, { genreApi } from "../apis/movie";
export const home = () => async (dispatch) => {
  const data = await movieApi.get(
    "popular?api_key=2212668cd8ad1eca01050d6cc3907a99"
  );
  dispatch({ type: "FETCH_DATA", payload: data.data.results.slice(0, 3) });
};
export const forward = () => {
  return { type: "FORWARD" };
};
export const back = () => {
  return { type: "BACK" };
};
export const cards = () => async (dispatch) => {
  const data = await movieApi.get(
    "popular?api_key=2212668cd8ad1eca01050d6cc3907a99"
  );
  console.log(data.data.results);
  dispatch({ type: "FETCH_CARDS", payload: data.data.results });
};
export const genre = () => async (dispatch) => {
  const data = await genreApi.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=2212668cd8ad1eca01050d6cc3907a99&language=en-US"
  );
  console.log(data.data.genres);

  dispatch({ type: "FETCH_GENRES", payload: data.data.genres });
};
export const topRated = () => async (dispatch) => {
  const data = await genreApi.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=2212668cd8ad1eca01050d6cc3907a99&language=en-US&page=1"
  );
  console.log(data.data.results);

  dispatch({ type: "FETCH_TOPRATED", payload: data.data.results });
};
