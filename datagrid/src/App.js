import React, { Component } from "react";
import Faker from "faker";

import Table from "./components/Table/table";

import "./App.css";

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    document.title = "React/Redux datagrid";
  }

  componentWillMount() {
    for (let i = 0; i < 1000; i++) {
      const user = {
        name: Faker.internet.userName(),
        email: Faker.internet.email(),
        ip: Faker.internet.ip(),
        id: Faker.random.number(),
        jobTitle: Faker.name.jobTitle(),
        finance: Faker.finance.bic(),
        boolean: `${Faker.random.boolean()}`,
        position: i + 1
      };
      this.setState(prevState => ({
        users: [...prevState.users, user]
      }));
    }
  }

  render() {
    const { users } = this.state;

    return (
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
        <Table data={users} />
      </div>
    );
  }
}

export default App;
