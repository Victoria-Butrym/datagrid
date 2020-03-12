import React, { Component } from "react";
// import { Provider } from "react-redux";
// import store from "./reducers/controlState";
import { connect } from "react-redux";

import Table from "./components/Table/table";
import VirtToggler from "./components/VirtualizationToggler/virtualisationToggler";

import { removeItem, booleanFilter } from "./actions/actionCreator";

import "./App.css";

class App extends Component {
  componentDidMount() {
    document.title = "React/Redux datagrid";
  }

  render() {
    const { users, removeItem, booleanFilter } = this.props;

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

        <VirtToggler />
        <Table
          users={users}
          removeItem={removeItem}
          booleanFilter={booleanFilter}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    users: state.users.users
  }),
  { removeItem, booleanFilter }
)(App);
