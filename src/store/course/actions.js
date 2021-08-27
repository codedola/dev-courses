import { CourseService } from "../../services/courses";
import { actIncreaseCourse } from "../auth/actions";
export const ACT_GET_LIST_ALL = "ACT_GET_LIST_ALL";
export const ACT_GET_LIST_COURSE = "ACT_GET_LIST_COURSE";
export const ACT_GET_LIST_COURSE_SEARCH = "ACT_GET_LIST_COURSE_SEARCH";
export const ACT_GET_LIST_COURSE_CATEGORIES = "ACT_GET_LIST_COURSE_CATEGORIES";

export function actGetListCourse(
    { count, currentPage, list, totalCount, totalPages },
    typeAction = ACT_GET_LIST_COURSE
) {
    return {
        type: typeAction,
        payload: {
            list,
            count,
            currentPage,
            totalCount,
            totalPages,
        },
    };
}

export function actGetListCourseCategories({ maDanhMuc, list }) {
    return {
        type: ACT_GET_LIST_COURSE_CATEGORIES,
        payload: {
            maDanhMuc,
            list,
        },
    };
}

export function actGetListCourseAll(list) {
    return {
        type: ACT_GET_LIST_ALL,
        payload: {
            list,
        },
    };
}
export function actGetListCourseAllAsync() {
    return async function (dispatch) {
        try {
            const response = await CourseService.GetListCourses();
            dispatch(actGetListCourseAll(response.data));
        } catch (error) {}
    };
}
export function actGetListCourseAsync({ page = 1, pageSize = 8 } = {}) {
    return async function (dispatch) {
        try {
            const response = await CourseService.GetLlistCoursePagination({
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
                    actGetListCourse({
                        list,
                        count,
                        currentPage,
                        totalCount,
                        totalPages,
                    })
                );
                return {
                    ok: true,
                    list,
                };
            } else {
                return {
                    ok: false,
                };
            }
        } catch (error) {
            return {
                ok: false,
                error,
            };
        }
    };
}

export function actGetListCourseByCategoryAsync(maDanhMuc) {
    return async function (dispatch) {
        try {
            const response = await CourseService.GetListCourseByCategory({
                maDanhMuc,
            });

            if (response.status === 200) {
                dispatch(
                    actGetListCourseCategories({
                        maDanhMuc,
                        list: response.data,
                    })
                );
                return {
                    ok: true,
                    data: response.data,
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

export function actGetListCourseBySearchAsync({
    page = 1,
    pageSize = 4,
    tenKhoaHoc = "",
} = {}) {
    return async function (dispatch) {
        try {
            const response = await CourseService.GetListCourseSearch({
                page,
                pageSize,
                tenKhoaHoc,
            });

            console.log("response search text", response);
            if (response.status === 200) {
                const {
                    currentPage,
                    count,
                    totalPages,
                    totalCount,
                    items: list,
                } = response.data;

                dispatch(
                    actGetListCourse(
                        {
                            list,
                            count,
                            currentPage,
                            totalCount,
                            totalPages,
                        },
                        ACT_GET_LIST_COURSE_SEARCH
                    )
                );

                return {
                    ok: true,
                };
            }
        } catch (error) {
            if (error.response.status === 500) {
                dispatch(
                    actGetListCourse(
                        {
                            list: [],
                            count: 0,
                            currentPage: 1,
                            totalCount: 0,
                            totalPages: 1,
                        },
                        ACT_GET_LIST_COURSE_SEARCH
                    )
                );
            }
            return {
                ok: false,
                message: error?.response?.data,
            };
        }
    };
}

export function actRegisterCourseAsync({ taiKhoan, maKhoaHoc, tenKhoaHoc }) {
    return async function (dispatch) {
        try {
            const response = await CourseService.RegisterCourse({
                taiKhoan,
                maKhoaHoc,
            });

            if (response.status === 200) {
                dispatch(actIncreaseCourse({ maKhoaHoc, tenKhoaHoc }));
                return {
                    ok: true,
                    message: response.data,
                };
            }
        } catch (error) {
            console.log({ error });
            return {
                ok: false,
                message: error?.response?.data,
            };
        }
    };
}
