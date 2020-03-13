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
      position: i + 1
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
      // console.log(action.id);
      // return {
      //   ...state,
      //   users: [...state.users.filter(item => item.id !== action.id)]
      // };
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
        // users: [
        //   ...state.users.filter(f => !state.itemsToDelete.includes(f.id))
        // ],
        itemsToDelete: []
      };

    case "FILTER_TRUE":
      console.log(action);
      return {
        ...state,
        users: [...state.users.filter(item => item.boolean === action.boolean)]
      };

    case "SORT_SCORE":
      console.log(action);
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
