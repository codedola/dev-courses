import { combineReducers } from "redux";
import courseReducer from "./course/reducer";
import categoriesReducer from "./category/reducer";
import authReducer from "./auth/reducer";
import userReducer from "./user/reducer";
const rootReducers = combineReducers({
    Courses: courseReducer,
    Categories: categoriesReducer,
    Auths: authReducer,
    User: userReducer,
});

export default rootReducers;
