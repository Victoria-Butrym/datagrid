import React, { Component } from "react";
import Select from "react-select";
import { FixedSizeGrid as Grid } from "react-window";

import { scoreOptions } from "../../selectOptions";
// import { sortScore, nameSearch } from "../../actions/actionCreator";

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
  { text: "active", id: "active" },
  { text: "not active", id: "not active" }
];

const Cell = props => {
  console.log(props);
  return <span>cell</span>;
};
// filteredUsers.map(user => (
//   <tr
//     key={user.id}
//     className="table-row"
//     onClick={e => this.toggleItemToDelete(e, user.id)}
//   >
//     <td className="center position sticky">{user.position}</td>
//     <td className="name">{user.name}</td>
//     <td className="center">{user.boolean}</td>
//     <td>{user.jobTitle}</td>
//     <td className="center">{user.score}</td>
//     <td>{user.finance}</td>
//     <td>{user.email}</td>
//   </tr>
// ));

class Table extends Component {
  getSelectedValue(option) {
    return option.value;
  }

  onChangeScoreFunc(optionSelected) {
    const value = this.getSelectedValue(optionSelected);
    this.props.dispatch({ type: "SORT_SCORE", value: value });
  }

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
    console.log(this.props);
    switch (filter) {
      case "active":
        return users.filter(user => user.boolean !== "false");
      case "not active":
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
      // inputText,
      // nameSearch
      // sortScore,
      // nameSearch
    } = this.props;
    const filteredUsers = this.filterActiveUsers(users, activeFilter);

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
                <input
                  className="input"
                  placeholder="Search..."
                  onChange={e => this.handleNameSearch(e)}
                />
              </th>
              <th className="center">Active</th>
              <th>
                <span>Speciality</span>
                <input
                  className="input"
                  placeholder="Search..."
                  onChange={e => this.handleNameSearch(e)}
                />
              </th>
              <th className="center">
                Score
                <Select
                  styles={customStyles}
                  options={scoreOptions}
                  onChange={this.onChangeScoreFunc.bind(this)}
                />
              </th>
              <th>BIC</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* <Grid
              columnCount={7}
              columnWidth={100}
              height={150}
              rowCount={1000}
              rowHeight={35}
              width={1000}
            >
              {Cell}
            </Grid> */}
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
