import Storage from "../../utilities/Storage";
import {
    LOG_OUT,
    SAVE_TOKEN,
    SAVE_INFO_CURRENT_USER,
    INCREASE_MY_COURSES,
} from "./actions";
const initialAuth = {
    accessToken: "",
    currentUser: null,
    countMyCourses: 0,
};

export default function authReducers(stateAuth = initialAuth, action) {
    switch (action.type) {
        case "GET_CURRENT_USER": {
            const { currentUser } = action.payload;
            return {
                ...stateAuth,
                currentUser,
            };
        }

        case SAVE_TOKEN: {
            const { token } = action.payload;
            Storage.setToken(token);
            return {
                ...stateAuth,
                accessToken: token,
            };
        }

        case SAVE_INFO_CURRENT_USER: {
            const { user } = action.payload;
            return {
                ...stateAuth,
                currentUser: user,
                countMyCourses: user?.chiTietKhoaHocGhiDanh?.length || 0,
            };
        }
        case LOG_OUT: {
            Storage.removeToken();
            return {
                ...stateAuth,
                accessToken: "",
                currentUser: null,
            };
        }
        case INCREASE_MY_COURSES: {
            return {
                ...stateAuth,
                countMyCourses: stateAuth.countMyCourses + 1,
            };
        }

        default: {
            return stateAuth;
        }
    }
}
