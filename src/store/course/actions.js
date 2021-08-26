import { CourseService } from "../../services/courses";

export const ACT_GET_LIST_COURSE = "ACT_GET_LIST_COURSE";
export const ACT_GET_LIST_COURSE_CATEGORIES = "ACT_GET_LIST_COURSE_CATEGORIES";
export function actGetListCourse({
    count,
    currentPage,
    list,
    totalCount,
    totalPages,
}) {
    return {
        type: ACT_GET_LIST_COURSE,
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

export function actGetInfoCourseByIDAsync(id) {
    return async function (dispatch) {
        try {
            // const response = await CourseService.GetInfoCourseByID(id);
        } catch (error) {}
    };
}
