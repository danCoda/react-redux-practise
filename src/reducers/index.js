import {combineReducers} from 'redux';
import blah from "./reducer-users";
import activeUser from "./reducer-active-user";

const allReducers = combineReducers({
    users: blah,
    activeUser
});

export default allReducers;