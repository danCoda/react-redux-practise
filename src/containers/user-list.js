import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectUser } from "../actions/action-user";

const UserList = (props) => {
  return (
    <div>
      Hello... Select a user below?
      {props.users.map((user) => (
        <li key={user.id} onClick={() => props.selectThisUser(user)}>
          {user.first}
        </li>
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectThisUser: selectUser }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
