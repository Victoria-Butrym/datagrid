import React, { Component } from "react";
// import Faker from "faker";
import { Provider } from "react-redux";
import store from "./reducers/controlState";

// import { createStore } from "redux";

import Table from "./components/Table/table";

import "./App.css";

// const initialState = () => {
//   return {
//     users: [
//       {
//         position: 1,
//         name: "Victoria",
//         boolean: "true",
//         jobTitle: "engineer",
//         score: "2000",
//         finance: "nope",
//         email: "no",
//         id: 1
//       }
//     ]
//   };
// };

// function reducer(state = initialState(), action) {
//   return state;
// }

// const store = createStore(reducer);

class App extends Component {
  // state = {
  //   users: []
  // };

  componentDidMount() {
    document.title = "React/Redux datagrid";
  }

  // componentWillMount() {
  //   for (let i = 0; i < 1000; i++) {
  //     const user = {
  //       name: Faker.internet.userName(),
  //       email: Faker.internet.email(),
  //       score: Faker.random.number(),
  //       id: i,
  //       jobTitle: Faker.name.jobTitle(),
  //       finance: Faker.finance.bic(),
  //       boolean: `${Faker.random.boolean()}`,
  //       position: i + 1
  //     };
  //     this.setState(prevState => ({
  //       users: [...prevState.users, user]
  //     }));
  //   }
  // }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1
            style={{
              fontWeight: "400",
              fontSize: "4rem",
              margin: "0",
              width: "100%"
            }}
          >
            Automotive Datagrid
          </h1>
          {/* <Table data={users} /> */}
          <Table />
        </div>
      </Provider>
    );
  }
}

export default App;
