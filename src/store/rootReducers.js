import { combineReducers } from "redux";
import courseReducer from "./course/reducer";
import categoriesReducer from "./category/reducer";

const rootReducers = combineReducers({
    Courses: courseReducer,
    Categories: categoriesReducer,
});

export default rootReducers;
