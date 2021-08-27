import { AuthServices } from "../../services/auth";
import Storage from "../../utilities/Storage";
//
export const LOG_OUT = "LOG_OUT";
export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const SAVE_TOKEN = "SAVE_TOKEN";
export const SAVE_INFO_CURRENT_USER = "SAVE_INFO_CURRENT_USER";
export const INCREASE_MY_COURSES = "INCREASE_MY_COURSES";
//
export function actIncreaseCourse() {
    return {
        type: INCREASE_MY_COURSES,
    };
}
export function actGetCurrentUser(user) {
    return {
        type: GET_CURRENT_USER,
        payload: {
            user,
        },
    };
}

export function actSaveToken(token) {
    return {
        type: SAVE_TOKEN,
        payload: {
            token,
        },
    };
}

export function actSaveInfoCurrentUser(user) {
    return {
        type: SAVE_INFO_CURRENT_USER,
        payload: {
            user,
        },
    };
}
export function actLogout() {
    return {
        type: LOG_OUT,
    };
}

export function actRegisterAsync({ taiKhoan, matKhau, hoTen, soDT, email }) {
    return async function (dispatch) {
        try {
            const response = await AuthServices.Register({
                taiKhoan,
                matKhau,
                hoTen,
                soDT,
                email,
            });

            if (response.status === 200) {
                // uesrInfo= {taiKhoan, matKhau, hoTen, soDT, email, maNhom}
                const userInfo = response.data;
                return {
                    ok: true,
                    user: userInfo,
                };
            } else {
                return {
                    ok: false,
                };
            }
        } catch (error) {
            return {
                ok: false,
                error: { error },
            };
        }
    };
}
export function actGetInfoCurrentUserAsync() {
    return async function (dispatch) {
        try {
            const response = await AuthServices.getInfoCurrentUser();

            if (response.status === 200) {
                dispatch(actSaveInfoCurrentUser(response.data));
            }
        } catch (error) {}
    };
}

export function actLoginAsync({ taiKhoan, matKhau }) {
    return async function (dispatch) {
        try {
            const response = await AuthServices.Login({
                taiKhoan,
                matKhau,
            });

            if (response.status === 200) {
                const { accessToken, ...user } = response.data;
                dispatch(actSaveToken(accessToken));
                await dispatch(actGetInfoCurrentUserAsync());
                return {
                    ok: true,
                    user,
                };
            } else {
                return {
                    ok: false,
                };
            }
        } catch (error) {
            return {
                ok: false,
                message: error?.response?.data,
            };
        }
    };
}

export function actCheckLoginAsync() {
    return async function (dispatch) {
        try {
            const token = Storage.getToken();
            if (token && token !== "") {
                dispatch(actSaveToken(token));
                await dispatch(actGetInfoCurrentUserAsync());
            }
        } catch (error) {}
    };
}
