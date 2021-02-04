export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_JOBS":
      return [...action.payload];
    default:
      return state;
  }
}
