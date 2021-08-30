import { UserServices } from "../../services/user";
export const GET_ALL_USER = "GET_ALL_USER";
export const GET_LIST_USER_PAGING = "GET_LIST_USER_PAGING";
export const GET_CATEGORIES_USER = "GET_CATEGORIES_USER";
export function actGetAllUser(list) {
    return {
        type: GET_ALL_USER,
        payload: {
            list,
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
            console.log("Response categories user", response);
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
