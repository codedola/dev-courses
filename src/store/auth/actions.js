import { AuthServices } from "../../services/auth";

export function actRegisterAsync({ taiKhoan, matKhau, hoTen, soDT, email }) {
    return async function (dispatch) {
        try {
            const response = await AuthServices.Register({
                taiKhoan,
                matKhau,
                hoTen,
                soDT,
                email,
            });

            console.log("response register", response);
        } catch (error) {}
    };
}
