import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "./components/Table/table";
import { CSVLink } from "react-csv";

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
      inputText,
      removeItems
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

        <Table
          users={users}
          selectItem={selectItem}
          booleanFilter={booleanFilter}
          sortScore={sortScore}
          nameSearch={nameSearch}
          activeFilter={filters}
          inputText={inputText}
        />
        <button
          onClick={e => {
            e.persist();
            removeItems();
          }}
          className="btn"
        >
          delete Items
        </button>
        <CSVLink
          data={users}
          filename={"boom.csv"}
          className="btn download-btn"
          target="_blank"
        >
          download csv
        </CSVLink>
      </div>
    );
  }
}

function searchInUsers(searchValue, arr) {
  return arr.filter(obj =>
    Object.keys(obj).some(key => obj[key].toString().includes(searchValue))
  );
}

export default connect(
  state => ({
    users: searchInUsers(state.search, state.users.users),
    filters: state.filters,
    inputText: state.search
  }),
  { selectItem, booleanFilter, sortScore, removeItems, nameSearch }
)(App);
