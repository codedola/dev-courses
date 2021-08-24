import { api } from "./api";

export const CategoriesService = {
    GetList() {
        return api.call().get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
    },
};
