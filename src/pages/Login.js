import React, { useState } from "react";
import { Col } from "antd";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { actLoginAsync } from "../store/auth/actions";
import {
    showNotification,
    typeNotify,
} from "../components/shared/Notification";
import LoginForm from "../components/LoginForm";
import {
    SpacingStyled,
    LoginStyled,
    RowLoginStyled,
} from "../components/Styled/Login.Styled";
import useNotAuth from "../utilities/hook/useNotAuth";
export default function Login() {
    useNotAuth();
    const dispatch = useDispatch();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    function handleSubmitLogin(formData) {
        if (loading) return;
        const { taiKhoan, matKhau } = formData;
        setLoading(true);
        dispatch(actLoginAsync({ taiKhoan, matKhau })).then(function (res) {
            setLoading(false);
            if (res.ok) {
                showNotification({
                    type: typeNotify.success,
                    message: "Thành công",
                    description: `Tài khoản ${res?.user?.taiKhoan} đăng nhập thành công`,
                    duration: 3,
                });
                history.push("/");
            } else {
                showNotification({
                    type: typeNotify.error,
                    message: "Đăng nhập thất bại",
                    description: res?.message || "",
                    duration: 3,
                });
            }
        });
    }
    return (
        <LoginStyled>
            <SpacingStyled sizeSpacing={"30px"} />
            <RowLoginStyled justify='center'>
                <Col xs={24} md={12} lg={10}>
                    <LoginForm
                        handleSubmitLogin={handleSubmitLogin}
                        loading={loading}
                    />
                </Col>
            </RowLoginStyled>
            <SpacingStyled sizeSpacing={"30px"} />
        </LoginStyled>
    );
}
