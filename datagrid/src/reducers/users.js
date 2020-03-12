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
    virtualization: true
  };
};

const users = (state = initialState(), action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      //   console.log(state.users.filter(item => item.id !== action.id));
      // return newState.users.filter(item => item.id !== action.id);
      // console.log({ ...state }.users.filter(item => item.id !== action.id));
      // console.log(action.id === { ...state }.users[0].id);
      return {
        ...state,
        users: [...state.users.filter(item => item.id !== action.id)]
      };

    case "FILTER_TRUE":
      return {
        ...state,
        users: [...state.users.filter(item => item.boolean === action.boolean)]
      };

    default:
      return state;
  }
};

export default users;
