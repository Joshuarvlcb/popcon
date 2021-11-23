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
  console.log(data.data);
  dispatch({ type: "FETCH_CARDS", payload: data.data.results });
};
export const search =
  (page = 1) =>
  async (dispatch) => {
    const data = await movieApi.get(
      `popular?api_key=2212668cd8ad1eca01050d6cc3907a99&page=${page}`
    );
    console.log(data.data);
    console.log(data.data.results);
    dispatch({
      type: "FETCH_SEARCH",
      payload: { data: data.data.results, pages: data.data.total_pages },
    });
  };
export const inputSearch =
  (input, page = 1) =>
  async (dispatch) => {
    const { data } = await genreApi.get(
      `https://api.themoviedb.org/3/search/movie?query=${input}&page=${page}`
    );
    console.log(data);
    // console.log(data.data.results);
    dispatch({
      type: "FETCH_SEARCH",
      payload: { data: data.results, pages: data.total_pages },
    });
  };
export const genre = () => async (dispatch) => {
  const data = await genreApi.get(
    "https://api.themoviedb.org/3/genre/movie/list"
  );
  console.log(data.data.genres);
  dispatch({ type: "FETCH_GENRES", payload: data.data.genres });
};
export const topRated = () => async (dispatch) => {
  const data = await genreApi.get(
    "https://api.themoviedb.org/3/movie/top_rated?&page=1"
  );
  console.log(data.data.results);
  dispatch({ type: "FETCH_TOPRATED", payload: data.data.results });
};
export const getMovie = (id) => async (dispatch) => {
  const { data } = await genreApi.get(
    `https://api.themoviedb.org/3/movie/${id}`
  );
  const {
    data: { cast },
  } = await genreApi.get(`https://api.themoviedb.org/3/movie/${id}/credits`);
  const {
    data: { results },
  } = await genreApi.get(`https://api.themoviedb.org/3/movie/${id}/similar`);
  dispatch({
    type: "FETCH_MOVIE",
    payload: { ...data, cast, similarMovies: results },
  });
};

export const getActor = (id) => async (dispatch) => {
  const { data } = await genreApi.get(
    `https://api.themoviedb.org/3/person/${id}`
  );
  const { data: d } = await genreApi.get(
    `https://api.themoviedb.org/3/person/${id}/movie_credits`
  );
  dispatch({ type: "FETCH_ACTOR", payload: { ...data, stared: d.cast } });
};

export const addingToWatchlist = (movie) => {
  return {type:"ADD_MOVIE",movie}
}