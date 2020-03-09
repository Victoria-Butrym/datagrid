import React from "react";

const Table = ({ data }) => {
  return (
    <>
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Employed</th>
            <th>Speciality</th>
            <th>Score</th>
            <th>BIC</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id} className="table-row">
              <td className="center">{user.position}</td>
              <td>{user.name}</td>
              <td className="center">{user.boolean}</td>
              <td>{user.jobTitle}</td>
              <td className="center">{user.score}</td>
              <td>{user.finance}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
        {/* <span
          className="table-head"
          style={{ color: "#5b0b0d", fontWeight: "600" }}
        >
          № Name Employed Speciality IP BIC
        </span> */}
        {/* <ul className="rows">
          {data.map(user => (
            <li key={user.id} className="row-item">
              <span style={{ margin: "0 1rem" }}>{user.position}</span>
              <span style={{ margin: "0 1rem" }}>{user.name}</span>
              <span style={{ margin: "0 1rem" }}>{user.boolean}</span>
              <span style={{ margin: "0 1rem" }}>{user.jobTitle}</span>
              <span style={{ margin: "0 1rem" }}>{user.ip}</span>
              <span style={{ margin: "0 1rem" }}>{user.finance}</span>
            </li>
          ))}
        </ul> */}
      </table>
    </>
  );
};

export default Table;
