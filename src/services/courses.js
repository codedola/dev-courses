import { api } from "./api";

export const CourseService = {
    GetListCourses() {
        return api.call().get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc", {
            params: {
                MaNhom: "GP01",
            },
        });
    },
    GetLlistCoursePagination({ page = 1, pageSize = 8, ...restParams }) {
        return api.call().get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang", {
            params: {
                page,
                pageSize,
                MaNhom: "GP01",
                ...restParams,
            },
        });
    },
    GetListCourseSearch({ page = 1, pageSize = 4, tenKhoaHoc = "" } = {}) {
        return CourseService.GetLlistCoursePagination({
            page,
            pageSize,
            tenKhoaHoc,
        });
    },
    GetListCourseByCategory({ maDanhMuc = "TuDuy", ...restParams } = {}) {
        return api.call().get("/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", {
            params: {
                maDanhMuc,
                MaNhom: "GP01",
                ...restParams,
            },
        });
    },
    GetInfoCourseByID(maKhoaHoc) {
        return api.call().get("/QuanLyKhoaHoc/LayThongTinKhoaHoc", {
            params: {
                maKhoaHoc,
            },
        });
    },
};
