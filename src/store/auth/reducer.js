import Storage from "../../utilities/Storage";
import {
    LOG_OUT,
    SAVE_TOKEN,
    SAVE_INFO_CURRENT_USER,
    INCREASE_MY_COURSES,
    DECREASE_MY_COURSES,
} from "./actions";
import { ACT_UPLOAD_CURRENT_USER } from "../user/actions";
const initialAuth = {
    accessToken: "",
    currentUser: null,
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
                countMyCourses: 0,
            };
        }
        case INCREASE_MY_COURSES: {
            const { maKhoaHoc, tenKhoaHoc } = action.payload;
            return {
                ...stateAuth,
                currentUser: {
                    ...stateAuth.currentUser,
                    chiTietKhoaHocGhiDanh: [
                        ...stateAuth.currentUser.chiTietKhoaHocGhiDanh,
                        { maKhoaHoc, tenKhoaHoc },
                    ],
                },
            };
        }

        case DECREASE_MY_COURSES: {
            const { maKhoaHoc } = action.payload;
            return {
                ...stateAuth,
                currentUser: {
                    ...stateAuth.currentUser,
                    chiTietKhoaHocGhiDanh: [
                        ...stateAuth.currentUser.chiTietKhoaHocGhiDanh.filter(
                            function (course) {
                                return course.maKhoaHoc !== maKhoaHoc;
                            }
                        ),
                    ],
                },
            };
        }

        case ACT_UPLOAD_CURRENT_USER: {
            return {
                ...stateAuth,
                currentUser: {
                    ...stateAuth.currentUser,
                    ...action.payload.data,
                },
            };
        }

        default: {
            return stateAuth;
        }
    }
}
