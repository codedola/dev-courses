import { UserServices } from "../../services/user";
export const GET_ALL_USER = "GET_ALL_USER";
export const GET_LIST_USER_PAGING = "GET_LIST_USER_PAGING";
export const GET_CATEGORIES_USER = "GET_CATEGORIES_USER";
export const ACT_UPLOAD_CURRENT_USER = "ACT_UPLOAD_CURRENT_USER";
export const ACT_DELETE_USER = "ACT_DELETE_USER";
export function actGetAllUser(list) {
    return {
        type: GET_ALL_USER,
        payload: {
            list,
        },
    };
}
export function actDeleteUser(taiKhoan) {
    return {
        type: ACT_DELETE_USER,
        payload: {
            taiKhoan
        }
    }
}
export function actUploadCurrentUser(data) {
    return {
        type: ACT_UPLOAD_CURRENT_USER,
        payload: {
            data,
        },
    };
}

export function actGetListUserPaging({
    count,
    currentPage,
    list,
    totalCount,
    totalPages,
}) {
    return {
        type: GET_LIST_USER_PAGING,
        payload: {
            count,
            currentPage,
            list,
            totalCount,
            totalPages,
        },
    };
}
export function getCategoriesUser(list) {
    return {
        type: GET_CATEGORIES_USER,
        payload: {
            list,
        },
    };
}
export function actGetAllUserAsync() {
    return async function (dispatch) {
        try {
            const response = await UserServices.GetListAll();
            if (response.status === 200) {
                dispatch(actGetAllUser(response.data));
            }
        } catch (error) {}
    };
}
export function actGetCategoriesUserAsync() {
    return async function (dispatch) {
        try {
            const response = await UserServices.GetCategoriesUser();

            dispatch(getCategoriesUser(response.data));
        } catch (error) {}
    };
}
export function actGetUserPagingAsync({ page = 1, pageSize = 100 } = {}) {
    return async function (dispatch) {
        try {
            const response = await UserServices.GetListUserPaging({
                page,
                pageSize,
            });
            if (response.status === 200) {
                const {
                    count,
                    currentPage,
                    items: list,
                    totalCount,
                    totalPages,
                } = response.data;
                dispatch(
                    actGetListUserPaging({
                        count,
                        currentPage,
                        list,
                        totalCount,
                        totalPages,
                    })
                );
            }
        } catch (error) {}
    };
}

export function actUploadInfoCurrentUserAsync({
    taiKhoan,
    matKhau,
    hoTen,
    soDT,
    maLoaiNguoiDung = "HV",
    email,
} = {}) {
    return async function (dispatch, getState) {
        try {
            const response = await UserServices.UploadInfoCurrentUser({
                taiKhoan,
                matKhau,
                hoTen,
                soDT,
                maLoaiNguoiDung,
                email,
            });

            if (response.status === 200) {
                dispatch(actUploadCurrentUser(response.data));
                await dispatch(actGetAllUserAsync());

                return {
                    ok: true,
                };
            }
        } catch (error) {
            return {
                ok: false,
            };
        }
    };
}

export function actDeleteUserAsync(TaiKhoan) {
    return async function (dispatch) {
        try {
            const response = await UserServices.DeleteUser(TaiKhoan);
            console.log("response delete user", response)
            if (response.status === 200) {
                dispatch(actDeleteUser(TaiKhoan))
                return {
                    ok: true
                }
            }
        } catch (error) {
            console.log("loi trong delete user", {error})
               return {
                   ok: false,
                   message: error?.response?.data
                }
        }
    }
}