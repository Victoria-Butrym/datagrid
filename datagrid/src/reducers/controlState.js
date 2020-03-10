// import React from "react";
import { createStore } from "redux";

const initialState = () => {
  return {
    users: [
      {
        position: 1,
        name: "Victoria",
        boolean: "true",
        jobTitle: "engineer",
        score: "2000",
        finance: "nope",
        email: "no",
        id: 1
      }
    ]
  };
};

function reducer(state = initialState(), action) {
  return state;
}

const store = createStore(reducer);

export default store;
