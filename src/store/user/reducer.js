import {
    GET_LIST_USER_PAGING,
    GET_ALL_USER,
    GET_CATEGORIES_USER, ACT_DELETE_USER, ACT_ADD_NEW_USER
} from "./actions";
const initState = {
    listAllUser: [],
  
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
        case ACT_ADD_NEW_USER: {
            return {
                ...stateUser,
                listAllUser: [...stateUser.listAllUser, action.payload.user]
            }
        }
        case ACT_DELETE_USER: {
            const key = action.payload.taiKhoan
            return {
                ...stateUser,
                listAllUser: [...stateUser.listAllUser.filter(user => user.taiKhoan !== key)]
            }
        }
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
