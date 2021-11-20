/* eslint-disable import/no-anonymous-default-export */
export default (state = [], action) => {
  if (action.type === "FETCH_CARDS") {
    return action.payload;
  } else {
    return state;
  }
};
