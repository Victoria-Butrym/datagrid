import React, { Component } from "react";
// import { Provider } from "react-redux";
// import store from "./reducers/controlState";
import { connect } from "react-redux";
import Table from "./components/Table/table";
import VirtToggler from "./components/VirtualizationToggler/virtualisationToggler";

import {
  selectItem,
  booleanFilter,
  sortScore,
  removeItems
} from "./actions/actionCreator";

import "./App.css";

class App extends Component {
  componentDidMount() {
    document.title = "React/Redux datagrid";
  }

  render() {
    const { users, selectItem, booleanFilter, sortScore } = this.props;

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

        {/* <VirtToggler /> */}
        {/* <button onClick={this.props.removeItems}>Delete Items</button> */}
        <Table
          users={users}
          selectItem={selectItem}
          booleanFilter={booleanFilter}
          sortScore={sortScore}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    users: state.users.users
  }),
  { selectItem, booleanFilter, sortScore, removeItems }
)(App);
