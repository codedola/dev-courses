import {
    GET_LIST_USER_PAGING,
    GET_ALL_USER,
    GET_CATEGORIES_USER,
} from "./actions";
const initState = {
    listAllUser: [],
    listGiaoVu: [],
    listHocVien: [],
    PagingUser: {
        list: [],
        count: 0,
        currentPage: 1,
        totalCount: 0,
        totalPages: 1,
    },
    hashCategoriesUser: {},
};

export default function userReducer(stateUser = initState, action) {
    switch (action.type) {
        case GET_LIST_USER_PAGING: {
            const {
                list: listCourse,
                count,
                currentPage,
                totalCount,
                totalPages,
            } = action.payload;
            return {
                ...stateUser,
                PagingUser: {
                    ...stateUser.PagingUser,
                    list:
                        currentPage === 1
                            ? listCourse
                            : [...stateUser.PagingUser.list, ...listCourse],
                    currentPage,
                    count,
                    totalCount,
                    totalPages,
                },
            };
        }

        case GET_ALL_USER: {
            const list = action.payload.list;
            return {
                ...stateUser,
                listAllUser: list,
                listGiaoVu: list.filter(
                    (user) => user.maLoaiNguoiDung === "GV"
                ),
                listHocVien: list.filter(
                    (user) => user.maLoaiNguoiDung === "HV"
                ),
            };
        }

        case GET_CATEGORIES_USER: {
            const hashCate = action.payload.list.reduce(function (curr, item) {
                return {
                    ...curr,
                    [item.maLoaiNguoiDung]: item.tenLoaiNguoiDung,
                };
            }, {});
            return {
                ...stateUser,
                hashCategoriesUser: hashCate,
            };
        }

        default:
            return stateUser;
    }
}
