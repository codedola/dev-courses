import { UserServices } from "../../services/user";
export const GET_ALL_USER = "GET_ALL_USER";
export const GET_LIST_USER_PAGING = "GET_LIST_USER_PAGING";
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
export function actGetAllUserAsync() {
    return async function (dispatch) {
        try {
            const response = await UserServices.GetListAll();
            console.log("response get list all user", response);
            if (response.status === 200) {
                dispatch(actGetAllUser(response.data));
            }
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
            console.log("response get list USER PAGINF", response);
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
