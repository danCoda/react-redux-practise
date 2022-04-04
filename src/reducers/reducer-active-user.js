const defaultUser = JSON.parse(localStorage.getItem("selectedUser"));

const activeUser = (state = defaultUser ?? null, action) => {
  switch (action.type) {
    case "USER_SELECTED":
      localStorage.setItem("selectedUser", JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
};

export default activeUser;
