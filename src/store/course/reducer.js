import {
    ACT_GET_LIST_COURSE,
    ACT_GET_LIST_ALL,
    ACT_GET_LIST_COURSE_CATEGORIES,
    ACT_GET_LIST_COURSE_SEARCH,
    ACT_DELETE_COURSE_CREATION
} from "./actions";
const intialState = {
    listAll: [],
    hashListCourseAll: {},
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
        case ACT_DELETE_COURSE_CREATION: {
            const id = action.payload.maKhoaHoc; //
            const maDanhMuc = action.payload.maDanhMuc
            const listCourseCategory = stateCourse.HashCourseCategories[maDanhMuc];
            console.log("maDanhMuc", maDanhMuc)
             console.log("listCourseCategory", listCourseCategory)
            return {
                ...stateCourse,
                listAll: [...stateCourse.listAll.filter(course => course.maKhoaHoc !== id)],
                HashCourseCategories: {
                    ...stateCourse.HashCourseCategories,
                    [maDanhMuc]:listCourseCategory ? [...listCourseCategory.filter(course => course.maKhoaHoc !== id)] : []
                }
            }
        }
        case ACT_GET_LIST_ALL: {
            const hashCourse = action.payload.list.reduce(function (
                hash,
                course
            ) {
                return {
                    ...hash,
                    [course.maKhoaHoc]: course,
                };
            },
            {});
            return {
                ...stateCourse,
                hashListCourseAll: hashCourse,
                listAll: action.payload.list
            };
        }
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
