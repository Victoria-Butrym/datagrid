import React from "react";
import { connect } from "react-redux";

// const mapStateToProps = state => ({
//   users: state.users.users
// });

const Table = ({ users, removeItem, booleanFilter }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th className="center sticky position-header">№</th>
            <th>Name</th>
            <th className="center">Employed</th>
            <th>Speciality</th>
            <th className="center">Score</th>
            <th>BIC</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="table-row">
              <td
                className="center position sticky"
                onClick={() => removeItem(user.id)}
              >
                {user.position}
              </td>
              <td className="name">{user.name}</td>
              <td
                className="center"
                onClick={() => booleanFilter(user.boolean)}
              >
                {user.boolean}
              </td>
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
};

// export default connect(mapStateToProps)(Table);
export default Table;
