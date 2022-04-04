import React from "react";
import { connect } from "react-redux";

const UserDetails = ({ user }) => {
    console.log("Hey");
  return user ? (
    <div>
      <div>Selected user: {user.first}</div>
    </div>
  ) : (
    <div>Select a user pls...</div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.activeUser,
  };
};

export default connect(mapStateToProps)(UserDetails);
