import { api } from "./api";

export const AuthServices = {
    Register({ taiKhoan, matKhau, hoTen, soDT, email }) {
        return api.call().post("/QuanLyNguoiDung/DangKy", {
            taiKhoan,
            matKhau,
            hoTen,
            soDT,
            email,
            maLoaiNguoiDung: "GV",
            maNhom: "GP01", //GP02
        });
    },
    Login({ taiKhoan, matKhau }) {
        return api
            .call()
            .post("/QuanLyNguoiDung/DangNhap", { taiKhoan, matKhau });
    },
    getInfoCurrentUser() {
        return api.callWithAuth().post("/QuanLyNguoiDung/ThongTinNguoiDung");
    },
};
