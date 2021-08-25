import { api } from "./api";

export const AuthServices = {
    Register({ taiKhoan, matKhau, hoTen, soDT, email }) {
        return api.call().post("/QuanLyNguoiDung/DangKy", {
            taiKhoan,
            matKhau,
            hoTen,
            soDT,
            email,
            maNhom: "GP01",
        });
    },
    Login({ taiKhoan, matKhau }) {
        return api
            .call()
            .post("/QuanLyNguoiDung/DangNhap", { taiKhoan, matKhau });
    },
};
