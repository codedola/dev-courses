import { combineReducers } from "redux";
import courseReducer from "./course/reducer";
import categoriesReducer from "./category/reducer";
import authReducers from "./auth/reducer";
const rootReducers = combineReducers({
    Courses: courseReducer,
    Categories: categoriesReducer,
    Auths: authReducers,
});

export default rootReducers;
