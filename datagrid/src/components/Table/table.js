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
    fontSize: 10,
    display: "none"
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

class Table extends Component {
  onChangeScoreFunc(optionSelected) {
    const value = optionSelected.value;
    console.log(this);
    this.props.dispatch(
      { type: "SORT_SCORE", value: value }
      // this.props.users[0].id,
      // value
    );
  }

  render() {
    const { users, selectItem, booleanFilter, sortScore } = this.props;
    return (
      <div className="table-wrapper">
        <table className="table">
          <thead className="table-head">
            <tr>
              <th className="center sticky position-header">№</th>
              <th>
                Name
                <Select styles={customStyles} options={booleanOptions} />
              </th>
              <th className="center">
                Employed
                <Select styles={customStyles} options={booleanOptions} />
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
            {users.map(user => (
              <tr
                key={user.id}
                className="table-row"
                onClick={() => selectItem(user.id)}
              >
                <td className="center position sticky">{user.position}</td>
                <td className="name">{user.name}</td>
                <td
                  className="center"
                  onClick={() => booleanFilter(user.boolean)}
                >
                  {user.boolean}
                </td>
                <td>{user.jobTitle}</td>
                <td className="center" onClick={() => sortScore(user.score)}>
                  {user.score}
                </td>
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
