const BASE_FILTER = "all";

const filter = (state = BASE_FILTER, action) => {
  switch (action.type) {
    case "BOOLEAN_FILTER":
      return action.boolean;
    default:
      return state;
  }
};

export default filter;
