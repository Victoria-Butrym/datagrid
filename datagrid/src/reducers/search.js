const INPUT_TEXT = "";

const search = (state = INPUT_TEXT, action) => {
  switch (action.type) {
    case "TABLE_SEARCH":
      return action.value;
    default:
      return state;
  }
};

export default search;
