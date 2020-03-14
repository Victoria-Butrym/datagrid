import Faker from "faker";

function createData() {
  const users = [];
  for (let i = 0; i < 1000; i++) {
    const user = {
      name: Faker.internet.userName(),
      email: Faker.internet.email(),
      score: Faker.random.number(),
      id: i,
      jobTitle: Faker.name.jobTitle(),
      finance: Faker.finance.bic(),
      boolean: `${Faker.random.boolean()}`,
      position: i + 1,
      delete: false
    };
    users.push(user);
  }

  return users;
}

const initialState = () => {
  return {
    users: createData(),
    virtualization: true,
    sortScore: null,
    itemsToDelete: []
  };
};

const users = (state = initialState(), action) => {
  switch (action.type) {
    case "SELECT_ITEM":
      return {
        ...state,
        itemsToDelete: [...state.itemsToDelete, action.id]
      };

    case "REMOVE_ITEMS":
      console.log(state.itemsToDelete);
      // return {
      //   ...state,
      //   users: [...state.users.filter(item => item.id !== action.id)]
      // };
      return {
        ...state,
        users: [
          ...state.users.filter(f => !state.itemsToDelete.includes(f.id))
        ],
        itemsToDelete: []
      };

    // case "NAME_SEARCH":
    //   console.log(action.value);
    //   return {
    //     ...state,
    //     users: [...state.users.filter(item => item.name.includes(action.value))]
    //   };

    case "SORT_SCORE":
      switch (action.value) {
        case "up":
          return {
            ...state,
            users: [...state.users.sort((a, b) => (a.score > b.score ? 1 : -1))]
          };
        case "down":
          return {
            ...state,
            users: [...state.users.sort((a, b) => (a.score < b.score ? 1 : -1))]
          };
        default:
          return state;
      }

    default:
      return state;
  }
};

export default users;
