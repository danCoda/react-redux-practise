const activeUser = (state = null, action) => {
    switch (action.type) {
        case "USER_SELECTED":
            console.log("Yooo", action);
            return action.payload;
            break;
    }
    return state;
}

export default activeUser;