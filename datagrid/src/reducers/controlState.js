// import React from "react";
import { createStore } from "redux";
import addData from "../actions/generateData";
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
    users: createData()
  };
};

function reducer(state = initialState(), action) {
  switch (action.type) {
    case "ADD_DATA":
      return [...state, ...createData()];

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
