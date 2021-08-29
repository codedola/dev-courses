import { GET_LIST_USER_PAGING, GET_ALL_USER } from "./actions";
const initState = {
    listAllUser: [],
    PagingUser: {
        list: [],
        count: 0,
        currentPage: 1,
        totalCount: 0,
        totalPages: 1,
    },
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
            return {
                ...stateUser,
                listAllUser: action.payload.list,
            };
        }

        default:
            return stateUser;
    }
}
