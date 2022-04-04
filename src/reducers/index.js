import {combineReducers} from 'redux';
import blah from "./reducer-users";

const allReducers = combineReducers({
    users: blah,
});

export default allReducers;