import React, { Component } from "react";
import Select from "react-select";
// import { FixedSizeGrid as Grid } from "react-window";
// import { CSVLink } from "react-csv";

import { scoreOptions, COLUMN_BTNS, FILTER_BTNS } from "../../selectOptions";
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

// const Cell = props => {
//   console.log(props);
//   return <span>cell</span>;
// };
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
  state = {
    activeColumn: React.createRef("active")
  };
  getSelectedValue(option) {
    return option.value;
  }

  onChangeScoreFunc(optionSelected) {
    const value = this.getSelectedValue(optionSelected);
    this.props.dispatch({ type: "SORT_SCORE", value: value });
  }

  handleNameSearch = e => {
    const value = e.target.value;
    this.props.dispatch({ type: "TABLE_SEARCH", value: value });
  };

  toggleItemToDelete(e, id) {
    this.props.dispatch({ type: "SELECT_ITEM", id: id });
    e.currentTarget.className = "table-row active";
  }

  filterActiveUsers = (users, filter) => {
    switch (filter) {
      case "active":
        return users.filter(user => user.boolean !== "false");
      case "not active":
        return users.filter(user => user.boolean === "false");
      default:
        return users;
    }
  };

  toggleDisplay(e, element) {
    if (element.style.display === "none") {
      e.target.className = "btn visible";
      element.style.display = "table-cell";
    } else {
      e.target.className = "btn";
      element.style.display = "none";
    }
  }

  showHideColumn(e) {
    const column = e.target.getAttribute("column");

    const elements = [
      ...document.querySelectorAll(`td[column=${column}]`),
      ...document.querySelectorAll(`th[column=${column}]`)
    ];

    elements.forEach(td => this.toggleDisplay(e, td));
  }

  render() {
    const { users, booleanFilter, activeFilter } = this.props;
    const filteredUsers = this.filterActiveUsers(users, activeFilter);

    return (
      <div className="table-wrapper">
        <div className="filter-btns">
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
        </div>

        <div className="column-btns">
          {COLUMN_BTNS.map(({ text, id }) => {
            return (
              <button
                onClick={e => this.showHideColumn(e)}
                key={id}
                column={id}
                className="btn visible"
              >
                {text}
              </button>
            );
          })}
        </div>

        <input
          className="input"
          placeholder="Search..."
          onChange={e => this.handleNameSearch(e)}
        />
        {/* <CSVLink
          data={filteredUsers}
          filename={"boom.csv"}
          className="btn download-btn"
          target="_blank"
        >
          download csv
        </CSVLink> */}
        <table className="table">
          <thead className="table-head" onClick={e => this.showHideColumn(e)}>
            <tr>
              <th className="center sticky position-header">№</th>
              <th column="name">Name</th>
              <th className="center" column="boolean">
                Active
              </th>
              <th column="speciality">
                <span>Speciality</span>
              </th>
              <th className="center" column="score">
                Score
                <Select
                  styles={customStyles}
                  options={scoreOptions}
                  onChange={this.onChangeScoreFunc.bind(this)}
                />
              </th>
              <th column="hired">Hired</th>
              <th column="bic">BIC</th>
              <th column="email">Email</th>
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
                <td className="name" column="name">
                  {user.name}
                </td>
                <td className="center boolean" column="boolean">
                  {user.boolean}
                </td>
                <td column="speciality">{user.jobTitle}</td>
                <td className="center" column="score">
                  {user.score}
                </td>
                <td column="hired">{user.hired}</td>
                <td column="bic">{user.finance}</td>
                <td column="email">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect()(Table);
