import React, { useState } from "react";
import { Col } from "antd";
import { useDispatch } from "react-redux";
import { actRegisterAsync } from "../store/auth/actions";
import RegisterForm from "../components/RegisterForm";
import { useHistory } from "react-router-dom";
import {
    showNotification,
    typeNotify,
} from "../components/shared/Notification";
import {
    SpacingStyled,
    LoginStyled,
    RowLoginStyled,
} from "../components/Styled/Login.Styled";

export default function Register() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    function handleSubmitRegister(formData) {
        setLoading(true);
        const { taiKhoan, matKhau, hoTen, soDT, email } = formData;
        dispatch(
            actRegisterAsync({ taiKhoan, matKhau, hoTen, soDT, email })
        ).then(function (res) {
            setLoading(false);
            if (res.ok) {
                showNotification({
                    type: typeNotify.success,
                    message: "Thành công",
                    description: `Tài khoản "${res?.user?.taiKhoan}" đã đăng ký thành công`,
                    duration: 3,
                });
                history.push("/login");
            }
        });
    }
    return (
        <LoginStyled>
            <SpacingStyled sizeSpacing={"30px"} />
            <RowLoginStyled justify='center'>
                <Col xs={24} md={12} lg={10}>
                    <RegisterForm
                        handleSubmitRegister={handleSubmitRegister}
                        loading={loading}
                    />
                </Col>
            </RowLoginStyled>
            <SpacingStyled sizeSpacing={"30px"} />
        </LoginStyled>
    );
}
