export default (state = [], action) => {
  if (action.type == "FETCH_CARDS") {
    return action.payload;
  } else {
    return state;
  }
};
