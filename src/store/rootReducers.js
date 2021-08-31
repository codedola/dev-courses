import { combineReducers } from "redux";
import courseReducer from "./course/reducer";
import categoriesReducer from "./category/reducer";
import authReducer from "./auth/reducer";
import userReducer from "./user/reducer";
import dashboardReducer from "./dashboard/reducer";
const rootReducers = combineReducers({
    Courses: courseReducer,
    Categories: categoriesReducer,
    Auths: authReducer,
    User: userReducer,
    Dashboard: dashboardReducer,
});

export default rootReducers;
