import React from "react";

const Table = ({ data }) => {
  return (
    <>
      <div className="table">
        <ul className="rows">
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
        </ul>
      </div>
    </>
  );
};

export default Table;
