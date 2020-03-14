const INPUT_TEXT = "";

const search = (state = INPUT_TEXT, action) => {
  switch (action.type) {
    case "NAME_SEARCH":
      console.log("action");
      return action.value;
    default:
      return state;
  }
};

export default search;
