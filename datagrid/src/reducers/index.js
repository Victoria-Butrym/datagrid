import { combineReducers } from "redux";
import users from "./users";
import filters from "./filters";
import search from "./search";

const rootReducer = combineReducers({ users, filters, search });

export default rootReducer;
