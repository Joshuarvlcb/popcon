export default (state = {}, action) => {
  switch (action.type) {
    case "FORWARD":
      if (state.current == state.items.length - 1) {
        return { items: state.items, current: 0 };
      } else {
        let copy = state.current;
        return { items: state.items, current: (copy += 1) };
      }
    case "BACK":
      if (state.current == 0) {
        return { items: state.items, current: state.items.length - 1 };
      } else {
        let copy = state.current;
        return { items: state.items, current: (copy -= 1) };
      }
    case "FETCH_DATA":
      return { items: action.payload, current: 0 };
    default:
      return state;
  }
};
