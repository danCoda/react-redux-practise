import React from "react";
import { connect } from "react-redux";

const UserList = (props) => {
  return (
    <div>
        Hello
      {props.users.map((user) => (
        <li key={user.id}>{user.first}</li>
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps)(UserList);
