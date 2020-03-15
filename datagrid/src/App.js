import React, { Component } from "react";
// import { Provider } from "react-redux";
// import store from "./reducers/controlState";
import { connect } from "react-redux";
import Table from "./components/Table/table";
// import VirtToggler from "./components/VirtualizationToggler/virtualisationToggler";

import {
  selectItem,
  booleanFilter,
  sortScore,
  removeItems,
  nameSearch
} from "./actions/actionCreator";

import "./App.css";

class App extends Component {
  componentDidMount() {
    document.title = "React/Redux datagrid";
  }

  render() {
    const {
      users,
      selectItem,
      booleanFilter,
      sortScore,
      nameSearch,
      filters,
      inputText
    } = this.props;

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
          React/Redux Datagrid
        </h1>

        {/* <VirtToggler /> */}
        <button onClick={this.props.removeItems} className="btn">
          Delete Items
        </button>
        <Table
          users={users}
          selectItem={selectItem}
          booleanFilter={booleanFilter}
          sortScore={sortScore}
          nameSearch={nameSearch}
          activeFilter={filters}
          inputText={inputText}
        />
      </div>
    );
  }
}

function searchInUsers(searchValue, arr) {
  // for (let key in user) {
  //   console.log(key);
  //   return user[key].includes(searchValue);
  // }
  return arr.filter(obj =>
    Object.keys(obj).some(key => obj[key].toString().includes(searchValue))
  );
}

export default connect(
  state => ({
    // users: state.users.users.filter(user => searchInUsers(state.search, user)),
    users: searchInUsers(state.search, state.users.users),
    filters: state.filters,
    inputText: state.search
  }),
  { selectItem, booleanFilter, sortScore, removeItems, nameSearch }
)(App);
