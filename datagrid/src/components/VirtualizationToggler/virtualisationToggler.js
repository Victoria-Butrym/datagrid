import React from "react";
import { connect } from "react-redux";

const mapStateToProps = ({ virtualization }) => ({
  virtualization: virtualization
});

const VirtToggler = ({ virtualization }) => {
  let active;

  virtualization ? (active = "checked") : (active = "");

  return (
    <>
      <input type="checkbox" id="virt" active />
      <label for="virt">Virtualization</label>
    </>
  );
};

export default connect(mapStateToProps)(VirtToggler);
