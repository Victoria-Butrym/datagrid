import React from "react";

const Table = ({ data }) => {
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
          {data.map(user => (
            <tr key={user.id} className="table-row">
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
};

export default Table;
