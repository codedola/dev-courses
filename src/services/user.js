import { api } from "./api";

export const UserServices = {
    GetListAll() {
        return api.call().get("/QuanLyNguoiDung/LayDanhSachNguoiDung", {
            params: {
                MaNhom: "GP01",
            },
        });
    },
    GetListUserPaging({ page = 1, pageSize = 20 } = {}) {
        return api
            .call()
            .get("/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang", {
                params: {
                    page,
                    pageSize,
                    MaNhom: "GP01",
                },
            });
    },
    GetCategoriesUser() {
        return api.call().get("/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
    },
};
