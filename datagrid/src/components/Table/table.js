import React, { Component } from "react";
import Select from "react-select";

import { booleanOptions, scoreOptions } from "../../selectOptions";
import { sortScore } from "../../actions/actionCreator";

import { connect } from "react-redux";

// const mapStateToProps = state => ({
//   users: state.users.users
// });

const customStyles = {
  menuList: base => ({
    ...base,
    padding: 0
  }),
  option: base => ({
    ...base,
    borderBottom: "1px solid #ccc",
    padding: 2,
    color: "#000"
  }),
  control: base => ({
    ...base,
    minHeight: 0,
    height: 18
  }),
  dropdownIndicator: base => ({
    ...base,
    minHeight: 0,
    height: 18,
    padding: 0
  }),
  indicatorsContainer: base => ({
    ...base,
    height: 15
  }),
  indicatorSeparator: base => ({
    ...base,
    display: "none"
  }),
  input: base => ({
    ...base,
    fontSize: 10
  }),
  placeholder: base => ({
    ...base,
    fontSize: 10,
    padding: 0
  }),
  container: base => ({
    ...base,
    fontSize: 10,
    padding: 0,
    marginBottom: 5
  }),
  valueContainer: base => ({
    height: 18
  })
};

const FILTER_BTNS = [
  { text: "all", id: "all" },
  { text: "active", id: "true" },
  { text: "not active", id: "false" }
];

class Table extends Component {
  getSelectedValue(option) {
    return option.value;
  }

  onChangeScoreFunc(optionSelected) {
    const value = this.getSelectedValue(optionSelected);
    this.props.dispatch({ type: "SORT_SCORE", value: value });
  }

  // toogleBooleanFunc(optionSelected) {
  //   const value = this.getSelectedValue(optionSelected);
  //   this.props.dispatch({ type: "BOOLEAN_FILTER", boolean: value });
  // }

  handleNameSearch = e => {
    const value = e.target.value;
    this.props.dispatch({ type: "NAME_SEARCH", value: value });
  };

  toggleItemToDelete(e, id) {
    this.props.dispatch({ type: "SELECT_ITEM", id: id });
    e.currentTarget.className = "table-row active";
    e.currentTarget.style.display = "none";
    console.log(e.currentTarget);
  }

  filterActiveUsers = (users, filter) => {
    console.log(filter);
    switch (filter) {
      case "true":
        return users.filter(user => user.boolean !== "false");
      case "false":
        return users.filter(user => user.boolean === "false");
      default:
        return users;
    }
  };

  render() {
    const {
      users,
      // selectItem
      booleanFilter,
      activeFilter
      // sortScore,
      // nameSearch
    } = this.props;
    const filteredUsers = this.filterActiveUsers(users, activeFilter);
    console.log(activeFilter);
    return (
      <div className="table-wrapper">
        {FILTER_BTNS.map(({ text, id }) => {
          return (
            <button
              onClick={() => booleanFilter(id)}
              key={id}
              className={
                id === activeFilter ? "filter-btn active-btn" : "filter-btn"
              }
            >
              {text}
            </button>
          );
        })}
        <table className="table">
          <thead className="table-head">
            <tr>
              <th className="center sticky position-header">№</th>
              <th>
                Name
                {/* <Select
                  styles={customStyles}
                  // options={booleanOptions}
                  isSearchable
                  onChange={() => alert("cgange")}
                /> */}
                <input
                  className="input"
                  placeholder="Search..."
                  onChange={this.handleNameSearch}
                />
              </th>
              <th className="center">
                Active
                {/* <Select
                  styles={customStyles}
                  options={booleanOptions}
                  // onChange={this.toogleBooleanFunc.bind(this)}
                /> */}
              </th>
              <th>
                <span>Speciality</span>
                <Select styles={customStyles} options={booleanOptions} />
              </th>
              <th className="center">
                Score
                <Select
                  styles={customStyles}
                  options={scoreOptions}
                  // onChange={() => sortScore(users[0].score)}
                  onChange={this.onChangeScoreFunc.bind(this)}
                />
              </th>
              <th>BIC</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr
                key={user.id}
                className="table-row"
                onClick={e => this.toggleItemToDelete(e, user.id)}
              >
                <td className="center position sticky">{user.position}</td>
                <td className="name">{user.name}</td>
                <td className="center">{user.boolean}</td>
                <td>{user.jobTitle}</td>
                <td className="center">{user.score}</td>
                <td>{user.finance}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect()(Table);
