import React from "react";

const Table = ({ data }) => {
  return (
    <>
      <div className="table">
        <ul className="rows">
          {data.map(user => (
            <li key={user.id} className="row-item">
              <span style={{ marginRight: ".3rem" }}>{user.position}</span>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Table;
