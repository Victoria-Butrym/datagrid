import React, { Component } from "react";
import Faker from "faker";

import Table from "./components/Table/table";

import "./App.css";

class App extends Component {
  state = {
    users: []
  };

  componentWillMount() {
    for (let i = 0; i < 1000; i++) {
      const user = {
        name: Faker.internet.userName(),
        email: Faker.internet.email(),
        id: Faker.random.number(),
        position: i + 1
      };
      this.setState(prevState => ({
        users: [...prevState.users, user]
      }));
    }
  }

  renderUsers(user) {
    return (
      <div>
        <h4>Name: {user.name}</h4>
        <h4>Email: {user.email}</h4>
      </div>
    );
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
        {/* <div className="row-item">
          {this.state.users.map(user => this.renderUsers(user))}
        </div> */}
      </div>
    );
  }
}

export default App;
