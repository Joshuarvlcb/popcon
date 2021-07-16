import movieApi from "../apis/movie";
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
