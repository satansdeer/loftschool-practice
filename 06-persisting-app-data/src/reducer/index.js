export default function(state = {}, action) {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
}
