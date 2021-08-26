import {
    ACT_GET_LIST_COURSE,
    ACT_GET_LIST_COURSE_CATEGORIES,
    ACT_GET_LIST_COURSE_SEARCH,
} from "./actions";
const intialState = {
    PagingCourse: {
        list: [],
        count: 0,
        currentPage: 1,
        totalCount: 0,
        totalPages: 1,
    },
    HashCourseCategories: {},
};

export default function courseReducer(stateCourse = intialState, action) {
    switch (action.type) {
        case ACT_GET_LIST_COURSE: {
            const {
                list: listCourse,
                count,
                currentPage,
                totalCount,
                totalPages,
            } = action.payload;
            return {
                ...stateCourse,
                PagingCourse: {
                    ...stateCourse.PagingCourse,
                    list:
                        currentPage === 1
                            ? listCourse
                            : [...stateCourse.PagingCourse.list, ...listCourse],
                    currentPage,
                    count,
                    totalCount,
                    totalPages,
                },
            };
        }

        case ACT_GET_LIST_COURSE_CATEGORIES: {
            const { maDanhMuc, list } = action.payload;
            return {
                ...stateCourse,
                HashCourseCategories: {
                    ...stateCourse.HashCourseCategories,
                    [maDanhMuc]: list,
                },
            };
        }
        case ACT_GET_LIST_COURSE_SEARCH: {
            const {
                list: listCourse,
                count,
                currentPage,
                totalCount,
                totalPages,
            } = action.payload;
            return {
                ...stateCourse,
                PagingCourse: {
                    ...stateCourse.PagingCourse,
                    list:
                        currentPage === 1
                            ? listCourse
                            : [...stateCourse.PagingCourse.list, ...listCourse],
                    currentPage,
                    count,
                    totalCount,
                    totalPages,
                },
            };
        }
        default:
            return stateCourse;
    }
}
